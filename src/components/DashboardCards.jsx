const cards = [
  {
    title: "Total Users",
    value: "1,200",
    change: "+5%",
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Revenue",
    value: "$34,000",
    change: "+2.1%",
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Active Sessions",
    value: "320",
    change: "-1.2%",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "Errors",
    value: "7",
    change: "+0.5%",
    color: "bg-red-100 text-red-800",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`rounded-lg shadow p-6 ${card.color} flex flex-col gap-2`}
        >
          <div className="text-sm font-medium">{card.title}</div>
          <div className="text-2xl font-bold">{card.value}</div>
          <div className="text-xs">{card.change}</div>
        </div>
      ))}
    </div>
  );
}
