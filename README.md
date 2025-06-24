
# 🧠 Redux Toolkit Setup with React

This documentation will guide you through integrating Redux Toolkit into a React application using best practices. We will use a simple counter app as an example.

---

## 🛠️ Tech Stack

- React
- Redux Toolkit
- React Redux
- TypeScript (recommended)
- Vite or Create React App

---

## 📦 Installation

Install the necessary packages:

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 📁 Project Folder Structure

```
src/
├── redux/
│   ├── store.ts
│   └── features/
│       └── counter/
│           └── counterSlice.ts
├── App.tsx
└── main.tsx
```

---

## 🚶 Step-by-Step Setup

### 1️⃣ Create the Store – `redux/store.ts`

```ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

**Explanation:**  
- `configureStore`: A simpler wrapper for creating a Redux store.
- `counterReducer`: Our slice reducer to manage counter state.
- `RootState` and `AppDispatch`: Types to use with `useSelector` and `useDispatch`.

---

### 2️⃣ Create a Slice – `redux/features/counter/counterSlice.ts`

```ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

**Explanation:**  
- `createSlice` auto-generates action creators and action types.
- State mutation is allowed using Immer under the hood.

---

### 3️⃣ Provide the Store to React – `main.tsx`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

**Explanation:**  
- `Provider` makes the Redux store available to the entire app.

---

### 4️⃣ Use Redux in Components – `App.tsx`

```tsx
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Redux Counter</h1>
      <p className="text-3xl mb-4">{count}</p>
      <div className="flex gap-4">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
```

**Explanation:**  
- `useDispatch`: To dispatch actions.
- `useSelector`: To select state from the Redux store.

---

## 🧪 Testing the App

1. Start the app: `npm run dev` (Vite) or `npm start` (CRA)
2. Click increment/decrement buttons
3. Observe the counter updating

---

## ✅ Best Practices

- Use TypeScript types (`RootState`, `AppDispatch`) to improve safety.
- Organize slices by feature.
- Enable Redux DevTools extension for debugging.

---

## 📚 References

- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [React Redux Docs](https://react-redux.js.org/)

---

Happy coding! 🚀
