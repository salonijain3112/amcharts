import React from "react";
import AmCharts4Wrapper from "react-amcharts4";
import { buildlineChartConfig } from "./lineChartconfig";

const ChartWrapper = () => {

    const { chartConfig, chartTypeClass } = buildlineChartConfig()

    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
        <AmCharts4Wrapper
            config={chartConfig}
            id="amcharts-4"
            chartTypeClass={chartTypeClass}
        />
        </div>
    );
};
 
export default ChartWrapper;