import {
  Card as BaseCard,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

interface RankingItem {
  rank: number;
  name: string;
  sales: number | string;
  profit: number | string;
}

interface RankingCardProps {
  title: string;
  items: RankingItem[];
  className?: string;
}

export const RankingCard = ({ title, items, className }: RankingCardProps) => {
  return (
    <BaseCard
      className={`flex-1 border shadow-lg hover:shadow-xl transition-shadow rounded-xl ${className}`}
    >
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-0 py-0">
        {/* Column Header */}
        <div className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">
          <span className="w-7 text-center">Rank</span>
          <span className="flex-1 ml-3">Name</span>
          <span className="w-20 text-right">Sales</span>
          <span className="w-20 text-right">Profit</span>
        </div>

        {/* Ranking List */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {items.map((item) => (
            <li
              key={item.rank}
              className="flex items-center px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {/* Rank */}
              <span
                className={`w-7 h-7 flex items-center justify-center rounded-full font-semibold text-sm ${
                  item.rank === 1
                    ? "bg-yellow-400 text-gray-900"
                    : item.rank === 2
                    ? "bg-gray-400 text-white"
                    : item.rank === 3
                    ? "bg-amber-700 text-white"
                    : "bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
                }`}
              >
                {item.rank}
              </span>

              {/* Name */}
              <span className="flex-1 ml-3 text-sm sm:text-base font-medium text-gray-800 dark:text-gray-100 truncate">
                {item.name}
              </span>

              {/* Sales */}
              <span className="w-20 text-right text-sm sm:text-base font-semibold text-blue-500">
                {item.sales}
              </span>

              {/* Profit */}
              <span className="w-20 text-right text-sm sm:text-base font-semibold text-green-500">
                {item.profit}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </BaseCard>
  );
};
