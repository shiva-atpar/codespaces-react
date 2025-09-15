import { Home, BarChart2, Users, Settings } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: <Home />, href: "#" },
  { name: "Analytics", icon: <BarChart2 />, href: "#" },
  { name: "Users", icon: <Users />, href: "#" },
  { name: "Settings", icon: <Settings />, href: "#" },
];

export default function Sidebar() {
  return (
    <aside className="bg-zinc-900 text-white w-64 min-h-screen flex flex-col">
      <div className="p-6 text-2xl font-bold tracking-tight">shadcn/ui</div>
      <nav className="flex-1 px-2 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-zinc-800 transition-colors"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-zinc-800 text-xs text-zinc-400">© 2025 shadcn/ui</div>
    </aside>
  );
}
