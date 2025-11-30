import { Label, Pie, PieChart } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { AmountPercentageResponse } from "@/features/transition/types/transaction.type"

export const description = "A donut chart with text"

const CHART_CONFIG = {
  amount: {
    label: "Amount",
  },
  chrome: {
    label: "Food & Dining",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Shopping",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Bills & Utilities",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Other",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

const CATEGORY_COLORS = {
  "Food & Dining": "var(--chart-1)",
  "Shopping": "var(--chart-2)",
  "Bills & Utilities": "var(--chart-3)",
  "Other": "var(--chart-4)",
} as const

const CATEGORIES = [
  "Food & Dining",
  "Shopping",
  "Bills & Utilities",
  "Other",
] as const

interface ChartPieDonutTextProps {
  data?: AmountPercentageResponse
}

export function ChartPieDonutText({ data }: ChartPieDonutTextProps) {
  if (!data?.category_percentage?.length) return null

  const getCategoryData = (categoryName: string) => {
    return data.category_percentage.find(
      (item) => item.category_name === categoryName
    )
  }

  const getMostPercentageCategory = () => {
    return data.category_percentage.reduce((max, current) =>
      current.percent > max.percent ? current : max
    )
  }

  const chartData = CATEGORIES.map((category) => {
    const categoryData = getCategoryData(category)
    return {
      category,
      amount: Number(categoryData?.total_amount || 0),
      percent: Number(categoryData?.percent || 0),
      fill: CATEGORY_COLORS[category],
    }
  });

  const mostPercentageCategory = getMostPercentageCategory()

  return (
    <div className="space-y-6">
      <div className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={CHART_CONFIG}
          className="mx-auto aspect-square w-full max-w-[260px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={80}
              outerRadius={100}
              strokeWidth={5}
              cornerRadius={8}
              paddingAngle={3}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {mostPercentageCategory.percent}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {mostPercentageCategory.category_name}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>

      {/* Category List */}
      <div className="space-y-3">
        {chartData.map((item) => (
          <div key={item.category} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-sm text-gray-700 dark:text-gray-400">
                {item.category}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {item.percent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}