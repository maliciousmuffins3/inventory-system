"use client";

import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import type { SaleProfitProgress } from "@/types/API";

export interface SaleProfitChartProps {
  data: SaleProfitProgress[];
  description?: string;
  className?: string;
}

/** Generate a lighter or darker HSL shade */
function shadeHSL(hsl: string, percent: number) {
  const match = hsl.match(/hsl\((\d+\.?\d*) (\d+\.?\d*)% (\d+\.?\d*)%\)/);
  if (!match) return hsl;
  const [_, h, s, l] = match;
  const newL = Math.min(100, Math.max(0, parseFloat(l) + percent));
  return `hsl(${h} ${s}% ${newL}%)`;
}

export function SaleProfitChart({
  data,
  description = "Sales & Profit Progress",
  className = "",
}: SaleProfitChartProps) {
  const [primaryColor, setPrimaryColor] = useState<string>(
    "hsl(262.1 83.3% 57.8%)"
  ); // default violet

  useEffect(() => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();
    if (color) setPrimaryColor(color);
  }, []);

  if (!data || data.length === 0) return null;

  // Month with highest sales
  const highestSales = data.reduce(
    (prev, curr) => (curr.sales > prev.sales ? curr : prev),
    data[0]
  );
  const salesColor = primaryColor;
  const profitColor = shadeHSL(primaryColor, 20); // 20% lighter for profit

  return (
    <Card
      className={`${className} shadow-lg hover:shadow-xl transition-shadow`}
    >
      <CardHeader>
        <CardTitle>Sales & Profit - Chart</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip />
            <Bar dataKey="sales" fill={salesColor} radius={[4, 4, 0, 0]} />
            <Bar dataKey="profit" fill={profitColor} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 text-sm mt-auto">
        <div className="flex items-center gap-2 font-medium">
          Month with highest sales: {highestSales.month} ({highestSales.sales})
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="text-muted-foreground">
          Showing sales & profit for the last {data.length} months
        </div>
      </CardFooter>
    </Card>
  );
}
