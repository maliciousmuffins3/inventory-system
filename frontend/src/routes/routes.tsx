import dashboardRoutes from "./dashboard.routes";
import branchRoutes from "./branch.routes";
import Layout from "@/layout/Layout";
import { ErrorToast } from "@/components/layout/ErrorElement";

export const appRoutes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorToast />,
    children: [...dashboardRoutes, ...branchRoutes],
  },
];
