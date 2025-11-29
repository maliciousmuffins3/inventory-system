import { Dashboard } from "@/components/pages/Dashboard";
import { dashboardLoader } from "./dashboard.loader";

export default [
  {
    path: "/dashboard",
    index: true,
    element: <Dashboard /> /*loader: dashboardLoader,*/,
  },
];
