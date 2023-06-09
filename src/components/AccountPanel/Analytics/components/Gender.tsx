import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Advertising } from "./Advertising";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Gender = () => {
  const data = {
    labels: ["Other", "Women", "Men"],
    datasets: [
      {
        data: [5, 43, 52],
        backgroundColor: ["#8A97AA", "#12B677", "#29ABE2"],
      },
    ],
  };

  const options = {
    redraw: true,
    responsive: true,
    interaction: {
      intersect: false,
      mode: "index",
    } as any,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: (context: any) => {
            const dataset = context.dataset;
            const value = dataset.data[context.dataIndex];
            return `${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="analytics__item-col">
      <div className="analytics__item analytics__gender">
        <div className="analytics__item-top analytics__item-top--gender">
          <div className="analytics__item-title">Gender</div>
        </div>
        <div className="analytics__gender-container">
          <Pie data={data} options={options} />
        </div>
        <div className="analytics__gender-items">
          <div className="analytics__gender-item">
            <svg
              width="6"
              height="14"
              viewBox="0 0 6 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 13.3333C1.81111 13.3333 1.65267 13.2693 1.52467 13.1413C1.39667 13.0133 1.33289 12.8551 1.33334 12.6667V8.66667H0.666669C0.47778 8.66667 0.319335 8.60267 0.191335 8.47467C0.0633354 8.34667 -0.000442138 8.18845 2.30681e-06 8V4.66667C2.30681e-06 4.3 0.130669 3.986 0.392003 3.72467C0.653336 3.46333 0.967113 3.33289 1.33334 3.33333H4C4.36667 3.33333 4.68067 3.464 4.942 3.72533C5.20334 3.98667 5.33378 4.30045 5.33334 4.66667V8C5.33334 8.18889 5.26934 8.34733 5.14134 8.47533C5.01334 8.60333 4.85511 8.66711 4.66667 8.66667H4V12.6667C4 12.8556 3.936 13.014 3.808 13.142C3.68 13.27 3.52178 13.3338 3.33334 13.3333H2ZM2.66667 2.66667C2.3 2.66667 1.986 2.536 1.72467 2.27467C1.46334 2.01333 1.33289 1.69956 1.33334 1.33333C1.33334 0.966668 1.464 0.652668 1.72534 0.391334C1.98667 0.130001 2.30045 -0.000443313 2.66667 1.13186e-06C3.03334 1.13186e-06 3.34734 0.130668 3.60867 0.392001C3.87 0.653334 4.00045 0.967112 4 1.33333C4 1.7 3.86934 2.014 3.608 2.27533C3.34667 2.53667 3.03289 2.66711 2.66667 2.66667Z"
                fill="#29ABE2"
              />
            </svg>
            <div className="analytics__gender-item-title">Men</div>
          </div>
          <div className="analytics__gender-item">
            <svg
              width="7"
              height="14"
              viewBox="0 0 7 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.35333 13.3333C2.16444 13.3333 2.006 13.2693 1.878 13.1413C1.75 13.0133 1.68622 12.8551 1.68667 12.6667V9.33333H0.67C0.436667 9.33333 0.253333 9.236 0.12 9.04133C-0.0133334 8.84667 -0.0355555 8.63844 0.0533334 8.41667L1.72 4.2C1.83111 3.93333 2.00333 3.72222 2.23667 3.56667C2.47 3.41111 2.73111 3.33333 3.02 3.33333C3.30889 3.33333 3.57 3.41111 3.80333 3.56667C4.03667 3.72222 4.20889 3.93333 4.32 4.2L5.98667 8.41667C6.07556 8.63889 6.05333 8.84733 5.92 9.042C5.78667 9.23667 5.60333 9.33378 5.37 9.33333H4.35333V12.6667C4.35333 12.8556 4.28933 13.014 4.16133 13.142C4.03333 13.27 3.87511 13.3338 3.68667 13.3333H2.35333ZM3.02 2.66667C2.65333 2.66667 2.33933 2.536 2.078 2.27467C1.81667 2.01333 1.68622 1.69956 1.68667 1.33333C1.68667 0.966668 1.81733 0.652668 2.07867 0.391334C2.34 0.130001 2.65378 -0.000443313 3.02 1.13186e-06C3.38667 1.13186e-06 3.70067 0.130668 3.962 0.392001C4.22333 0.653334 4.35378 0.967112 4.35333 1.33333C4.35333 1.7 4.22267 2.014 3.96133 2.27533C3.7 2.53667 3.38622 2.66711 3.02 2.66667Z"
                fill="#12B677"
              />
            </svg>
            <div className="analytics__gender-item-title">Women</div>
          </div>
          <div className="analytics__gender-item">
            <svg
              width="7"
              height="14"
              viewBox="0 0 7 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.35333 13.3333C2.16444 13.3333 2.006 13.2693 1.878 13.1413C1.75 13.0133 1.68622 12.8551 1.68667 12.6667L0.67 9.33333C0.436667 9.33333 0.253333 9.236 0.12 9.04134C-0.0133334 8.84667 -0.0355555 8.63845 0.0533334 8.41667L1.72 4.2C1.83111 3.93334 2.00333 3.72222 2.23667 3.56667C2.47 3.41111 2.73111 3.33333 3.02 3.33333C3.30889 3.33333 3.57 3.41111 3.80333 3.56667C4.03667 3.72222 4.20889 3.93334 4.32 4.2L5.98667 8.41667C6.07556 8.63889 6.05333 8.84733 5.92 9.042C5.78667 9.23667 5.60333 9.33378 5.37 9.33333L4.35333 12.6667C4.35333 12.8556 4.28933 13.014 4.16133 13.142C4.03333 13.27 3.87511 13.3338 3.68667 13.3333H2.35333ZM3.02 2.66667C2.65333 2.66667 2.33933 2.536 2.078 2.27467C1.81667 2.01333 1.68622 1.69956 1.68667 1.33333C1.68667 0.966668 1.81733 0.652668 2.07867 0.391334C2.34 0.130001 2.65378 -0.000443313 3.02 1.13186e-06C3.38667 1.13186e-06 3.70067 0.130668 3.962 0.392001C4.22333 0.653334 4.35378 0.967112 4.35333 1.33333C4.35333 1.7 4.22267 2.014 3.96133 2.27533C3.7 2.53667 3.38622 2.66711 3.02 2.66667Z"
                fill="#8A97AA"
              />
            </svg>
            <div className="analytics__gender-item-title">Other</div>
          </div>
        </div>
      </div>
      <Advertising />
    </div>
  );
};
