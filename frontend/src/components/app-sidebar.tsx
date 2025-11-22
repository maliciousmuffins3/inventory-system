import {
  History,
  ChartArea,
  Settings,
  Search,
  BookOpen,
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
import { useSidebar } from "@/components/ui/sidebar";

// Menu items
const items = [
  { title: "Dashboard", url: "#", icon: ChartArea },
  { title: "History", url: "#", icon: History },
  { title: "Inventory", url: "#", icon: BookOpen },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar>
      <SidebarContent className="relative">
        {/* Close button at the top-right */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-1 rounded hover:bg-muted cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <SidebarGroup>
          <SidebarGroupLabel>Inventory System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
