import { ChevronLeft, ArrowDownAZ, Search, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/layout/Layout";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ComboBox } from "@/components/PointOfSale/ComboBox";

export const PointOfSale = () => {
  return (
    <Layout title="Point of Sale">
      {/* Top Row: Navigation + Branch Selection */}
      <div className="flex flex-row gap-2 mb-4">
        <Button variant="outline" size="icon" aria-label="Go back">
          <ChevronLeft />
        </Button>

        <ComboBox />

        <Button variant="outline" size="icon" aria-label="Sort">
          <ArrowDownAZ />
        </Button>
      </div>

      {/* Search + Popover */}
      <div className="flex flex-row gap-2 mb-4">
        <Input type="search" placeholder="Search" className="max-w-2xs" />
        <Button type="submit" variant="outline">
          <Search />
        </Button>

        <Popover>
          {/*  Use asChild to prevent nested <button> */}
          <PopoverTrigger asChild>
            <Button type="button" variant="outline">
              <Eye />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-64 p-4">
            <h3 className="font-bold text-lg mb-2">View</h3>
            <p className="text-sm text-muted-foreground mb-4">per:</p>
            <RadioGroup defaultValue="both">
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="both" id="neutral" />
                <Label htmlFor="neutral">Both</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="kilo" id="kilo" />
                <Label htmlFor="kilo">Kilo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="piece" id="pc" />
                <Label htmlFor="pc">Piece</Label>
              </div>
            </RadioGroup>
          </PopoverContent>
        </Popover>
      </div>

      {/* Product Grid */}
      <div className="text-center grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {[...Array(5)].map((_, idx) => (
          <Card
            key={idx}
            className="cursor-pointer hover:bg-accent border shadow-lg hover:shadow-xl transition-shadow rounded-xl font-semibold"
          >
            <CardContent>Product</CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};
