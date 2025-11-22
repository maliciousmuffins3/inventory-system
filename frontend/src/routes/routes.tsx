import App from "@/App";
import { Login } from "@/pages/Login.tsx";
import { Dashboard } from "@/pages/Dashboard";

export const appRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
];
