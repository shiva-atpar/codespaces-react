export default function Header() {
  return (
    <header className="bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />
        <img
          src="/logo192.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}
