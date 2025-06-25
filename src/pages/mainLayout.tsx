import { Link, Outlet } from "react-router";
import { useAppSelector } from "../redux/hook";

const MainLayout = () => {
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div>
      <h1 className="bg-slate-300 text-xl p-3">Global Count: {count}</h1>
      <nav className="py-4 px-6 bg-gray-200 flex justify-evenly space-x-4">
        <Link className="btn btn-primary mr-2" to={"/app"}>
          App Page
        </Link>
        <Link className="btn btn-primary" to={"/counter"}>
          Counter Page
        </Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
