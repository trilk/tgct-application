import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/register",
    component: Register,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    isPrivate: true,
  },
  {
    path: "/*",
    component: NotFound,
    isPrivate: true,
  },
];

export default routes;
