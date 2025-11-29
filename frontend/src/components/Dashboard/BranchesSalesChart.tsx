"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import type { BranchSales } from "@/types/API";

// Generate distinct colors for each slice
function generateBranchColors(count: number, baseHue = 220): string[] {
  return Array.from({ length: count }, (_, i) => {
    const hue = (baseHue + i * 40) % 360;
    return `hsl(${hue}, 70%, 50%)`;
  });
}

// Custom Tooltip
const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as BranchSales & {
      color: string;
      percentage?: number;
    };

    return (
      <div className="bg-white p-2 rounded shadow border text-center">
        <span style={{ color: data.color, fontWeight: 600 }}>
          {data.branchSales} ({data.percentage?.toFixed(2)}%)
        </span>
      </div>
    );
  }
  return null;
};

export interface BranchesSalesChartProps {
  data: BranchSales[];
  description?: string;
  className?: string;
}

export function BranchesSalesChart({
  data,
  description = "Sales distribution for the current month",
  className = "",
}: BranchesSalesChartProps) {
  // 1. Ensure branchSales is numeric
  const cleanedData = data.map((d) => ({
    ...d,
    branchSales: Number(d.branchSales),
  }));

  // 2. Compute total manually
  const total = cleanedData.reduce((sum, d) => sum + d.branchSales, 0);

  // 3. Add colors + accurate percentages
  const colors = generateBranchColors(cleanedData.length);
  const dataWithColors = cleanedData.map((item, index) => ({
    ...item,
    color: colors[index],
    percentage: (item.branchSales / total) * 100,
  }));

  // 4. Top performing branch
  const topBranch = dataWithColors.reduce((prev, curr) =>
    curr.branchSales > prev.branchSales ? curr : prev
  );

  return (
    <Card
      className={`${className} shadow-lg hover:shadow-xl transition-shadow`}
    >
      <CardHeader>
        <CardTitle>Branches Sales - Chart</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex justify-center w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dataWithColors}
              dataKey="branchSales"
              nameKey="branchName"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ payload }) =>
                `${payload.branchName}: ${payload.percentage.toFixed(2)}%`
              }
            >
              {dataWithColors.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-1 text-sm">
        <span className="text-gray-500">Top Performing Branch</span>
        <span className="text-lg font-semibold text-primary">
          {topBranch.branchName} — {topBranch.branchSales} (
          {topBranch.percentage.toFixed(2)}%)
        </span>
      </CardFooter>
    </Card>
  );
}
