import { RouterProvider } from "react-router";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { router } from "@/routes";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
