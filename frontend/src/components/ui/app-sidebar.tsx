import {
  ChartArea,
  Settings,
  ShoppingBasket,
  Database,
  ClipboardClock,
  LogOut,
  X,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { useSidebar } from "@/components/ui/sidebar";

// Menu items
const items = [
  { title: "Dashboard", url: "/dashboard", icon: ChartArea },
  { title: "Point Of Sale", url: "branch", icon: ShoppingBasket },
  { title: "Inventory", url: "#", icon: Database },
  { title: "Transaction History", url: "#", icon: ClipboardClock },
  { title: "Settings", url: "#", icon: Settings },
  { title: "Logout", url: "#", icon: LogOut },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar>
      <SidebarContent className="bg-background flex flex-col h-full relative">
        {/* Close button at the top-right */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-1 rounded hover:bg-muted cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <SidebarGroup className="flex flex-col flex-1 justify-between">
          <div>
            <SidebarGroupLabel className="mb-4">
              Inventory System
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.slice(0, -1).map((item) => (
                  <SidebarMenuItem key={item.title} className="mb-2">
                    <SidebarMenuButton asChild>
                      <Link to={item.url} className="flex items-center gap-2">
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </div>

          {/* Last item sticks to the bottom */}
          <SidebarMenu className="mb-2">
            {items.slice(-1).map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item.url} className="flex items-center gap-2">
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
