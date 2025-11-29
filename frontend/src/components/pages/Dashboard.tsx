// import { useLoaderData } from "react-router";
import { SaleProfitChart } from "@/components/Dashboard/SaleProfitChart";
import { Card as OverviewCard } from "@/components/Dashboard/Card";
import { BranchesSalesChart } from "@/components/Dashboard/BranchesSalesChart";
export const description = "A multiple bar chart";
import { RankingCard } from "@/components/Dashboard/RankingCard";
import { DownloadReportButton } from "@/components/Dashboard/DownloadReportButton";
import { formatNumber } from "@/helpers/formatNumber";

// Development Imports
import type {
  BusinessOverview,
  ProductRankItem,
  BranchSales,
  SaleProfitProgress,
} from "@/types/API";

// Mock Data
const overview: BusinessOverview = {
  sales: 15_000,
  profit: 42_000,
  numberOfProducts: 424,
  profitGrowthRate: 15,
  salesGrowthRate: 10,
  productCountGR: 12,
};

const topProducts: ProductRankItem[] = [
  { productRank: 1, productName: "Product A", sales: 1200, profit: 450 },
  { productRank: 2, productName: "Product B", sales: 980, profit: 320 },
  { productRank: 3, productName: "Product C", sales: 870, profit: 290 },
  { productRank: 4, productName: "Product D", sales: 750, profit: 200 },
];

const currentMonthSales: BranchSales[] = [
  { branchName: "Branch 1", branchSales: 1200 },
  { branchName: "Branch 2", branchSales: 950 },
  { branchName: "Branch 3", branchSales: 1750 },
];

const chartData: SaleProfitProgress[] = [
  { month: "January", sales: 186, profit: 60 },
  { month: "February", sales: 305, profit: 120 },
  { month: "March", sales: 237, profit: 80 },
  { month: "April", sales: 73, profit: 30 },
  { month: "May", sales: 209, profit: 90 },
  { month: "June", sales: 214, profit: 100 },
];

export const Dashboard = () => {
  // const { overview, saleProfitProgress, branchSales } = useLoaderData();
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-4 p-4">
        <OverviewCard
          className="flex-1 min-w-[200px]" // grow but keep at least 200px
          title="Profit"
          desc="Monthly Profit"
          content={`₱${formatNumber(overview.profit)}`}
          content_desc={`${formatNumber(
            overview.profitGrowthRate
          )}% increase from last month`}
        />
        <OverviewCard
          className="flex-1 min-w-[200px]"
          title="Sales"
          desc="Monthly Sales"
          content={`₱${formatNumber(overview.sales)}`}
          content_desc={`${formatNumber(
            overview.salesGrowthRate
          )}% increase from last month`}
        />
        <OverviewCard
          className="flex-1 min-w-[200px]"
          title="Products"
          desc="Total Number of Products"
          content={overview.numberOfProducts}
          content_desc={`+${formatNumber(
            overview.productCountGR
          )}% from last month`}
        />
      </div>
      <div className="flex flex-1 p-4 gap-4 flex-wrap">
        <SaleProfitChart
          data={chartData}
          description="Monthly Sales & Profit"
          className="flex-1 basis-sm"
        />
        <BranchesSalesChart
          data={currentMonthSales}
          description="Sales for the current month"
          className="flex-1 basis-sm"
        />
      </div>
      <RankingCard
        title="Top Selling Products"
        items={topProducts}
        className="m-4"
      />
      <DownloadReportButton className="ml-auto mr-4" />
    </div>
  );
};
