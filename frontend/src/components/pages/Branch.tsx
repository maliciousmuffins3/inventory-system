import { useState } from "react";
import { ReusableItem } from "@/components/PointOfSale/BranchItem";
import { Card } from "@/components/ui/card";
import { Plus as AddBranchIcon } from "lucide-react";
type Branch = {
  id: string;
  title: string;
  description: string;
};

interface BranchItemDialogProps {
  isOpen?: boolean;
  setIsOpen: (value: boolean) => void;
}

export function Branch() {
  const [dialogState, setDialogState] = useState<boolean>(false);
  const [branches, setBranches] = useState<Branch[]>([
    { id: "1", title: "Marilao", description: "Login feature branch" },
    { id: "2", title: "Manila", description: "Fix signup bug" },
    { id: "3", title: "San Jose", description: "Header hotfix" },
  ]);

  const handleEdit = (id: string, newTitle: string) => {
    setBranches((prev) =>
      prev.map((branch) =>
        branch.id === id ? { ...branch, title: newTitle } : branch
      )
    );
  };

  const handleDelete = (id: string) => {
    setBranches((prev) => prev.filter((branch) => branch.id !== id));
  };

  return (
    <div className="block m-4">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight my-4">
        Branches
      </h4>
      <div className="m-2 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
        {branches.map((branch) => (
          <ReusableItem
            key={branch.id}
            id={branch.id} // required now
            title={branch.title}
            description={branch.description}
          />
        ))}
        <Card
          className="flex justify-center items-center cursor-pointer shadow-md"
          onClick={() => setDialogState(true)}
        >
          <AddBranchIcon />
        </Card>
      </div>
    </div>
  );
}
