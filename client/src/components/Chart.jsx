import React from "react";

const Chart = () => {
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const labels = Utils.months({count: 7});

const data = {
    labels: labels,
    datasets: [
    {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },]
}
const config = {
    type: "line",
    data: data,
    options: {
    responsive: true,
    plugins: {
        legend: {
        position: "top",
        },
        title: {
        display: true,
        text: "Chart.js Line Chart",
        },
    },
    },
};

    return 
    <div>
        Chart
    </div>;
};

export default Chart;
