import * as React from "react"
import { 
    Bar, 
    BarChart, 
    CartesianGrid,
    // XAxis 
} from "recharts"

import {
  Card,
  CardContent,
//   CardDescription,
  CardHeader,
//   CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
//   ChartLegend,
//   ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useGetByDays from "@/features/transition/hooks/useGetByDays"
import Loading from "@/components/common/Loading"
import { LineChart } from "lucide-react"

export const description = "An interactive area chart"


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function RateChart() {
  const [timeRange, setTimeRange] = React.useState("90")
  const { data, isLoading } = useGetByDays({ days: timeRange });

  const isEmpty = !data?.data || !data?.data?.length;

  return (
    <Card className="p-0 shadow-none rounded-3xl overflow-hidden border-0 h-full">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <span className="text-sm">Total Rate</span>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex border-0 shadow-none tex-sm"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl text-sm">
            <SelectItem value="90" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-0 min-h-[180px]">
        {
        isLoading ? (
          <div className="flex items-center justify-center min-h-[180px]">
            <Loading />
          </div>
        ) : isEmpty ? (
          <div className="flex flex-col items-center justify-center min-h-[180px] px-4">
            <div className="flex items-center justify-center mb-4">
              <LineChart className="w-12 h-12 text-muted-foreground" strokeWidth={1} />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              No transactions yet
            </h3>
            <p className="text-muted-foreground text-center max-w-sm text-sm">
              Your transaction history will appear here once you start recording your income and expenses.
            </p>
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-full w-full"
          >
              <BarChart accessibilityLayer data={data?.data}>
                  <CartesianGrid vertical={false} />
                  <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="income" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="expense" fill="var(--color-mobile)" radius={4} />
              </BarChart>
          </ChartContainer>
        )
        }
        
      </CardContent>
    </Card>
  )
}
