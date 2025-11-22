import { SidebarTrigger } from "@/components/ui/sidebar"; // adjust path
import { Menu } from "lucide-react"; // optional icon if needed

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Left side: Sidebar trigger */}
      <SidebarTrigger className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
        <Menu className="w-6 h-6" />
      </SidebarTrigger>

      {/* Center / Logo */}
      <h1 className="text-xl font-bold">My App</h1>

      {/* Right side: Optional actions */}
      <div className="flex items-center space-x-4">
        {/* Example: notifications */}
        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
          🔔
        </button>
      </div>
    </header>
  );
}
