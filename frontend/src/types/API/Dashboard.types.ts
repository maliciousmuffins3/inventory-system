type BusinessOverview = SaleProfit & {
  numberOfProducts: number;
  profitGrowthRate: number;
  salesGrowthRate: number;
  productCountGR: number;
};

type SaleProfitProgress = SaleProfit & {
  month: string;
};

type BranchSales = {
  branchName: string;
  branchSales: number;
};

type ProductRankItem = SaleProfit & {
  productRank: number;
  productName: string;
};

type SaleProfit = {
  sales: number;
  profit: number;
};

export type {
  BusinessOverview,
  SaleProfitProgress,
  BranchSales,
  SaleProfit,
  ProductRankItem,
};
