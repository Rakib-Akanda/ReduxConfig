import { createBrowserRouter } from "react-router";
import CounterPage from "../pages/counterpage";
import App from "../App";
import Home from "../pages/home";
import MainLayout from "../pages/mainLayout";

const routers = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "app",
        Component: App,
      },
      {
        path: "counter",
        Component: CounterPage,
      },
    ],
  },
]);
export default routers;
// {
//     path: "/app",
//     Component: App,
//   },
//   {
//     path: "/counter",
//     Component: CounterPage,
//   },
