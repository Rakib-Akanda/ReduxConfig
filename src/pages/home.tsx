import { Outlet } from "react-router";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Home;
