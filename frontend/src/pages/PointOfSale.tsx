import { ChevronLeft } from "lucide-react";
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
import { ArrowDownAZ, Search, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const PointOfSale = () => {
  return (
    <Layout title="Point of Sale">
      <div className="flex flex-row gap-2">
        {/* Navigate to Category Page */}
        <Button variant="outline" size="icon" aria-label="Submit">
          <ChevronLeft />
        </Button>
        {/* Select Branch */}
        <Select defaultValue="">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Branch</SelectLabel>
              <SelectItem value="marilao">Marilao</SelectItem>
              <SelectItem value="bulacan">Bulacan</SelectItem>
              <SelectItem value="manila">Manila</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon" aria-label="Submit">
          <ArrowDownAZ />
        </Button>
      </div>
      {/* <Separator /> */}
      <div className="flex flex-row gap-2">
        <Input type="search" placeholder="Search" className="max-w-2xs" />
        <Button type="submit" variant="outline">
          <Search />
        </Button>
        <Popover>
          <PopoverTrigger>
            <Button type="submit" variant="outline">
              <Eye />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <h3 className="font-bold text-lg mb-2">View</h3>
            <p className="text-sm text-muted-foreground mb-4">per:</p>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Kilo</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Piece</Label>
              </div>
            </RadioGroup>
          </PopoverContent>
        </Popover>
      </div>
      <div className="text-center grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        <Card className="cursor-pointer hover:bg-accent border shadow-lg hover:shadow-xl transition-shadow rounded-xl font-semibold">
          <CardContent>Product</CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-accent border shadow-lg hover:shadow-xl transition-shadow rounded-xl font-semibold">
          <CardContent>Product</CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-accent border shadow-lg hover:shadow-xl transition-shadow rounded-xl font-semibold">
          <CardContent>Product</CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-accent border shadow-lg hover:shadow-xl transition-shadow rounded-xl font-semibold">
          <CardContent>Product</CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-accent border shadow-lg hover:shadow-xl transition-shadow rounded-xl font-semibold">
          <CardContent>Product</CardContent>
        </Card>
      </div>
    </Layout>
  );
};
