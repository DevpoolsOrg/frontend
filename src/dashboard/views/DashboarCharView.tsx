import { Chart } from '../components/Chart';
import { chartData } from '../data/defautl.data';
import { ChartConfig } from "@/components/shadcn/ui/chart";
export const description = "An interactive bar chart";

const chartConfig = {
    views: {
      label: "Page Views",
    },
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;


export const DashboarCharView = () => {
  return (
    <Chart chartData={chartData} chartConfig={chartConfig} />
  
  )
}