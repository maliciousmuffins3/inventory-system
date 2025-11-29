import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { CustomSidebarTrigger } from "@/components/ui/custom-sidebar-trigger";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1 p-6 space-y-6">
          <header className="flex items-center gap-3 border-b pb-4">
            <CustomSidebarTrigger />
            <h1 className="text-md font-bold tracking-tight lg:text-2xl">
              Inventory System
            </h1>
          </header>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
