import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement
);

const data = {
  labels: ["13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65 +"],
  datasets: [
    {
      label: "Activity",
      data: [8, 20, 30, 50, 35, 9, 4, 3],
      backgroundColor: "rgba(41, 171, 226, 1)",
      stack: "Stack",
      barPercentage: 0.3,
    },
    {
      label: "Only views",
      data: [12, 50, 50, 35, 12, 66, 10],
      backgroundColor: "rgba(18, 182, 119, 1)",
      stack: "Stack",
      barPercentage: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  interaction: {
    intersect: false,
    mode: "index",
  } as any,
  borderRadius: 3,
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        min: 0,
        max: 100,
        stepSize: 20,
        callback: function (value: any) {
          return value !== 0 ? value + "%" : value;
        },
        color: "#8A97AA",
        font: {
          family: "Inter", // Шрифт
          size: 10, // Размер шрифта
        },
      },
    },
    x: {
      stacked: true,
      border: {
        display: true,
        color: "#8A97AA",
      },
      grid: {
        display: false,
      },
      ticks: {
        padding: 20,
        maxRotation: 90,
        minRotation: 90,
        color: "#8A97AA",
        font: {
          family: "Inter", // Шрифт
          size: 10, // Размер шрифта
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      callbacks: {
        label: (context: any) => {
          const dataset = context.dataset;
          const label = dataset.label;
          return `${label} - ${context.parsed.y}%`;
        },
      },
    },
  },
};

export const Age: FC = () => {
  return (
    <div className="analytics__item analytics__age">
      <div className="analytics__item-top">
        <div className="analytics__item-title">Age</div>
        <div className="analytics__activities">
          <div className="analytics__activities-item">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#12B677" />
            </svg>
            Activity
          </div>
          <div className="analytics__activities-item">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#29ABE2" />
            </svg>
            Only views
          </div>
        </div>
      </div>
      <div className="analytics__age-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
