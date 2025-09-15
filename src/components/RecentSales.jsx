const sales = [
  { name: "John Doe", amount: "$120.00", date: "2025-09-14" },
  { name: "Jane Smith", amount: "$340.00", date: "2025-09-13" },
  { name: "Alice Johnson", amount: "$560.00", date: "2025-09-12" },
  { name: "Bob Brown", amount: "$80.00", date: "2025-09-11" },
];

export default function RecentSales() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>
      <ul className="divide-y divide-zinc-200">
        {sales.map((sale, idx) => (
          <li key={idx} className="py-2 flex justify-between items-center">
            <span>{sale.name}</span>
            <span className="font-medium">{sale.amount}</span>
            <span className="text-xs text-zinc-400">{sale.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
