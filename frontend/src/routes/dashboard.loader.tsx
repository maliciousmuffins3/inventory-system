import { api } from "@/configs";
import { apiResponseCheck } from "@/helpers/apiResponseCheck";
import type {
  ApiResponse,
  BranchSales,
  BusinessOverview,
  SaleProfitProgress,
} from "@/types/API";

export async function dashboardLoader() {
  try {
    const [overviewRes, saleProfitProgressRes, branchSalesRes] =
      await Promise.all([
        api.get<ApiResponse<BusinessOverview>>("/business-overview"),
        api.get<ApiResponse<SaleProfitProgress[]>>("/sales-progress"),
        api.get<ApiResponse<BranchSales[]>>("/branch-sales"),
      ]);

    // Use apiResponseCheck to safely extract data
    const overview: BusinessOverview = apiResponseCheck(overviewRes.data);
    const saleProfitProgress: SaleProfitProgress[] = apiResponseCheck(
      saleProfitProgressRes.data
    );
    const branchSales: BranchSales[] = apiResponseCheck(branchSalesRes.data);

    return { overview, saleProfitProgress, branchSales };
  } catch (error: unknown) {
    console.error("Failed to fetch business data", error);
    throw error;
  }
}
