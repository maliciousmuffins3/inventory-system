import {
  Card as BaseCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface CardProps {
  title: string;
  desc?: string;
  content: string;
  content_desc?: string;
  className?: string;
}

export const Card = ({
  title,
  desc,
  content,
  content_desc,
  className,
}: CardProps) => {
  return (
    <BaseCard
      className={`flex-1 border shadow-lg hover:shadow-xl transition-shadow rounded-xl ${className}`}
    >
      <CardHeader className="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-1">
        <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </CardTitle>
        {desc && (
          <CardDescription className="text-xs sm:text-sm md:text-base lg:text-base text-gray-500 dark:text-gray-400">
            {desc}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-green-500">
          {content}
        </h1>
        {content_desc && (
          <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-base text-gray-500 dark:text-gray-400">
            {content_desc}
          </p>
        )}
      </CardContent>
    </BaseCard>
  );
};
