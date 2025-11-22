import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomSidebarTrigger } from "@/components/ui/custom-sidebar-trigger";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        {/* always remember always put a div after SidebarProvider as parent of all contents*/}
        <AppSidebar />
        <main className="flex-1 p-6 space-y-6">
          <header className="flex items-center gap-3 border-b pb-4">
            <CustomSidebarTrigger />
            <h1 className="text-md font-bold tracking-tight lg:text-2xl">
              Dashboard Overview
            </h1>
          </header>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
