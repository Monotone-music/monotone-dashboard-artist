import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { ViewData, getCharts } from "@/service/dashboardService"

const chartConfig = {
  views: {
    label: "Views",
    color: "#4CAF50",
  }
} satisfies ChartConfig

export function OverviewChart() {
  const [chartData, setChartData] = useState<ViewData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharts();
      setChartData(data);
    };
    
    fetchData();
  }, []);

  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart data={chartData}>
        <ChartTooltip content={<ChartTooltipContent />} />
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis
          dataKey="views"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <Bar dataKey="views" fill="var(--color-views)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
