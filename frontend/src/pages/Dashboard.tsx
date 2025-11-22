import Layout from "@/pages/Layout/Layout";
import { SaleProfitChart } from "@/components/Dashboard/SaleProfitChart";
import { Card as OverviewCard } from "@/components/Dashboard/Card";
import { BranchSalesChart } from "@/components/Dashboard/BranchSalesChart";
export const description = "A multiple bar chart";
import { RankingCard } from "@/components/Dashboard/RankingCard";
import { DownloadReportButton } from "@/components/Dashboard/DownloadReportButton";

const topProducts = [
  { rank: 1, name: "Product A", sales: 1200, profit: 450 },
  { rank: 2, name: "Product B", sales: 980, profit: 320 },
  { rank: 3, name: "Product C", sales: 870, profit: 290 },
  { rank: 4, name: "Product D", sales: 750, profit: 200 },
];

export const Dashboard = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-4 p-4">
          <OverviewCard
            className="flex-1 min-w-[200px]" // grow but keep at least 200px
            title="Profit"
            desc="Monthly Profit"
            content="₱15,000"
            content_desc="15% increase from last month"
          />
          <OverviewCard
            className="flex-1 min-w-[200px]"
            title="Sales"
            desc="Monthly Sales"
            content="₱42,000"
            content_desc="10% increase from last month"
          />
          <OverviewCard
            className="flex-1 min-w-[200px]"
            title="Products"
            desc="Total Number of Products"
            content="424"
            content_desc="+12% from yesterday"
          />
        </div>
        <div className="flex flex-1 p-4 gap-4 flex-wrap">
          <div className="flex-1 basis-sm">
            <SaleProfitChart />
          </div>
          <div className="flex-1 basis-sm">
            <BranchSalesChart />
          </div>
        </div>
        <RankingCard
          title="Top Selling Products"
          items={topProducts}
          className="m-4"
        />
        <DownloadReportButton className="ml-auto mr-4" />
      </div>
    </Layout>
  );
};
