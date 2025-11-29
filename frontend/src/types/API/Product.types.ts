type SoldType = "pc" | "kg";

type Product = {
  productId: number;
  productName: string;
  costPerUnit: number;
  sellingPrice: number;
  soldBy: SoldType;
  dateAdded: Date;
  addedBy: string;
  productCategoryId: number;
  productBranchId: number;
};

export type { SoldType, Product };
