import App from "@/App";
import { Login } from "@/pages/Login.tsx";
import { Dashboard } from "@/pages/Dashboard";
import { PointOfSale } from "@/pages/PointOfSale";

export const appRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/pos",
    element: <PointOfSale />,
  },
];
