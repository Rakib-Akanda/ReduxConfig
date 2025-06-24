import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
const App = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  console.log(count);
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <>
      <h1 className="text-6xl text-red-600 bg-amber-600 p-6">
        Counter with Redux
      </h1>
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <button onClick={() => handleIncrement(5)} className="btn btn-primary">
          Increment By 5
        </button>
        <button onClick={() => handleIncrement(1)} className="btn btn-primary">
          Increment
        </button>
        <div>
          <p className="border-2 p-5 my-3 text-2xl text-wrap">{count}</p>
        </div>
        <button onClick={() => handleDecrement(1)} className="btn btn-primary">
          Decrement
        </button>
        <button onClick={() => handleDecrement(5)} className="btn btn-primary">
          Decrement By 5
        </button>
      </div>
    </>
  );
};

export default App;
