import { StatCard } from "@/components/StatCard";
import { RevenueChart, ProjectionsChart, TotalSalesChart } from "@/components/Charts";
import { ProductTable } from "@/components/ProductTable";
import { RevenueByLocationCard } from "@/components/RevenueByLocation";
import { statsData } from '@/data/mockData';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">eCommerce</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Customers"
          value={statsData.customers.value}
          change={statsData.customers.change}
          isPositive={statsData.customers.isPositive}
        />
        <StatCard
          title="Orders"
          value={statsData.orders.value}
          change={statsData.orders.change}
          isPositive={statsData.orders.isPositive}
        />
        <StatCard
          title="Revenue"
          value={statsData.revenue.value}
          change={statsData.revenue.change}
          isPositive={statsData.revenue.isPositive}
        />
        <StatCard
          title="Growth"
          value={statsData.growth.value}
          change={statsData.growth.change}
          isPositive={statsData.growth.isPositive}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <ProjectionsChart />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProductTable />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <RevenueByLocationCard />
          <TotalSalesChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;