import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useIsMobile } from "@/hooks/use-mobile";

const collectionData = [
  { name: "Manga", value: 45, fill: "hsl(var(--primary))" },
  { name: "Manhwa", value: 30, fill: "hsl(var(--manga-accent))" },
  { name: "Manhua", value: 15, fill: "hsl(var(--accent))" },
  { name: "Hentai", value: 10, fill: "hsl(var(--destructive))" },
];

const chartConfig = {
  manga: {
    label: "Manga",
    color: "hsl(var(--primary))",
  },
  manhwa: {
    label: "Manhwa",
    color: "hsl(var(--manga-accent))",
  },
  manhua: {
    label: "Manhua",
    color: "hsl(var(--accent))",
  },
  hentai: {
    label: "Hentai",
    color: "hsl(var(--destructive))",
  },
};

interface CollectionChartProps {}

export const CollectionChart = ({}: CollectionChartProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="mobile-card p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold mb-4">
        Collection Breakdown
      </h3>

      <ChartContainer config={chartConfig} className="h-48 md:h-64 w-full">
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={collectionData}
            cx="50%"
            cy="50%"
            innerRadius={isMobile ? 30 : 40}
            outerRadius={isMobile ? 60 : 80}
            paddingAngle={2}
            dataKey="value"
          >
            {collectionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value) => <span className="text-sm">{value}</span>}
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
};
