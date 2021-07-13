export const buildXaxes = () => {
    return [
        {
            type: "DateAxis",
            dateFormatter: {
                dateFormat: format
            },
            renderer: {
                grid: {
                    disabled: false
                },
                cellStartLocation: 0.4,
                cellEndLocation: 0.8
            },
            title: {
                text: "Date Axis"
            }
        }
    ];
};

export const buildYaxes = () => {
    return {
        id: 1,
        type: "ValueAxis",
        renderer: {
            grid: {
                disabled: false
            }
        },
        layout: "absolute",
        title: {
            text: "Value Axis",
            fontSize: 15,
            strokeWidth: 0.3
        },
        numberFormatter: {
            type: "Number Formatter",
            numberFormat: "#a",
            bigNumberPrefixes: [
                {
                    number: 1000,
                    suffix: "k"
                },
                {
                    number: 1000000,
                    suffix: "m"
                },
                {
                    number: 1000000000,
                    suffix: "b"
                }
            ]
        }
    }
}

export const buildLegend = () => {
    return {
        position: "top",
        contentAlign: "right",
        markers: {
            width: 10,
            height: 10
        }
    }
}

export const buildSeries = () => {
    return {
        id,
        type: "LineSeries",
        strokeWidth: 2,
        dataFields: {
            valueY: visits,
            dateX: newDate
        },
        yAxis: 1,
        legendSettings: {
            labelText: valueKey
        }
    }
}

export const generateChartData = () => {
    let chartData = [];
    let firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 1000);
    let visits = 1200;
    for (var i = 0; i < 500; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);
        
        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

        chartData.push({
            date: newDate,
            visits: visits
        });
    }
    return chartData;
}

export const buildlineChartConfig = () => {
    const chartTypeClass = require("@amcharts/amcharts4/charts").XYChart;

    const chartConfig = {};
    chartConfig.xAxes = buildXaxes();
    chartConfig.yAxes = buildYaxes();
    chartConfig.series = buildSeries();
    chartConfig.legend = buildLegend();
    chartConfig.data = generateChartData();;

    return { chartTypeClass, chartConfig };
}