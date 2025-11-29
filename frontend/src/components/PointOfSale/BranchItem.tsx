import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PenLine } from "lucide-react";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router";
import { Form, useRevalidator } from "react-router";
import { useEffect } from "react";

type ReusableItemProps = {
  id: string; // Added ID
  title: string;
  description: string;
  onClick?: () => void;
  initialEditing?: boolean;
  branchId?: string; // optional navigation
};

export function ReusableItem({
  id,
  title: initialTitle,
  description,
  onClick,
  initialEditing = false,
}: ReusableItemProps) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(initialEditing);
  const [title, setTitle] = useState(initialTitle);
  const { revalidate, state } = useRevalidator();

  const handleCancel = () => {
    setTitle(initialTitle);
    setIsEditing(false);
  };

  const handleItemClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    if ((e.target as HTMLElement).closest("input")) return;
    if (onClick) onClick();
    else if (id) navigate(`/branch/${id}`);
    else navigate("/");
  };

  const handleDelete = () => {
    revalidate();
  };

  return (
    <Item
      variant="outline"
      onClick={handleItemClick}
      className="cursor-pointer shadow-md"
    >
      <ItemContent>
        {isEditing ? (
          <Form className="flex gap-2 flex-wrap items-center" method="POST">
            <Input
              value={title}
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 basis-[200px] max-w-sm"
            />
            <div className="flex flex-row flex-nowrap gap-1">
              <Button type="submit" variant="outline" size="sm">
                Save
              </Button>
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </Form>
        ) : (
          <ItemTitle>{title}</ItemTitle>
        )}
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>

      <ItemActions>
        <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
          <PenLine />
        </Button>
        <Button size="sm" onClick={handleDelete}>
          <Trash />
        </Button>
      </ItemActions>
    </Item>
  );
}
