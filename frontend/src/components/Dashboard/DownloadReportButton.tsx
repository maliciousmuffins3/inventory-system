import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  onClick?: () => void;
  className?: string;
}

export const DownloadReportButton = ({
  onClick,
  className,
}: DownloadButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 
        bg-primary hover:bg-primary/90
        text-white font-semibold 
        rounded-lg shadow-md hover:shadow-lg 
        transition-all active:scale-95
        ${className}
      `}
    >
      <Download size={18} />
      <span>Download Report</span>
    </Button>
  );
};
