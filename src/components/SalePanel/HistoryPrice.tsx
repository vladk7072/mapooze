import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const HistoryPrice: FC<any> = ({ selectLand, dataMonth }) => {
  
  const labelsArray = [
    {
      data: ["2019", "2020", "2021", "2022", "2023"],
      price: [10, 60, 210, 350, 580],
    },
    {
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      price: [123, 230, 453, 144, 253, 561, 124, 355, 312, 340, 321, 214],
    },
    {
      data: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      price: [
        263, 512, 184, 147, 561, 56, 456, 287, 353, 499, 425, 386, 219, 143,
        311, 98, 532, 417, 188, 30, 382, 487, 73, 221, 564, 582, 309, 132, 364,
        40, 205,
      ],
    },
  ];

  let width: any, height: any, gradient: any;
  function getGradient(ctx: any, chartArea: any) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        chartArea.left,
        chartArea.top,
        chartArea.right,
        chartArea.bottom
      );
      gradient.addColorStop(0, "rgba(41, 171, 226, 0.5)");
      gradient.addColorStop(1, "rgba(18, 182, 119, 0.35)");
      // gradient.addColorStop(0, "#165162");
      // gradient.addColorStop(1, "#13452E");
    }

    return gradient;
  }
  const data = {
    labels: labelsArray[selectLand - 1].data,
    datasets: [
      {
        fill: true,
        label: `${dataMonth[selectLand].item} price history`,
        data: labelsArray[selectLand - 1].price,
        backgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
        shadowColor: "rgba(255,255,255,0.8)",
        pointRadius: 0,
        hoverRadius: 0,
        borderWidth: 0,
        borderColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
      },
    ],
  };

  const options = {
    interaction: {
      intersect: false,
      mode: "index",
    } as any,
    scales: {
      y: {
        border: {
          display: true,
        },
        ticks: {
          padding: 16, // Отступ между графиком и шкалой на оси y
        },
        // grid: {
        //   display: true,
        //   color: "rgba(138, 151, 170, 0.2)",
        // },
      },
      x: {
        border: {
          display: true,
        },
        ticks: {
          padding: 15, // Отступ между графиком и шкалой на оси x
        },
      },
    },

    elements: {
      line: {
        tension: 0.4,
      },
    },
    plugins: {
      legend: {
        display: false, // Скрыть легенду
      },
      tooltip: {
        enabled: true, // Включить всплывающие подсказки
        displayColors: false, // Не показывать цвета точек в подсказках
        callbacks: {
          label: function (context: any) {
            // Форматирование данных для отображения в подсказке
            return `Price: ${context.parsed.y} ETH`;
          },
        },
      },
    },
  };

  return (
    <div className="saleplace__qraph-wrapper">
      <Line data={data} options={options} />
    </div>
  );
};
