import ReactDOM from "react-dom/client";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router";
import routers from "./routes/routes.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={routers} />
  </Provider>
);
