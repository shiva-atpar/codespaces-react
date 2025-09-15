
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCards from "./components/DashboardCards";
import RecentSales from "./components/RecentSales";

function App() {
  return (
    <div className="flex min-h-screen bg-zinc-100">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 flex-1">
          <DashboardCards />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              {/* Placeholder for charts or more dashboard content */}
              <div className="bg-white rounded-lg shadow p-6 h-64 flex items-center justify-center text-zinc-400">
                Chart or Analytics Content
              </div>
            </div>
            <RecentSales />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
