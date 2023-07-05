import { FC, useEffect, useRef, useState } from "react";
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

export const ProfileView: FC = () => {
  const [modeNumber, setModeNumber] = useState<number>(2);
  const [isActivePeriodList, setActivePeriodList] = useState(false);

  const [landNumber, setLandNumber] = useState<number>(1);
  const [isActiveLandsList, setActiveLandsList] = useState(false);

  const dataLands = [
    {
      id: 0,
      item: "",
    },
    {
      id: 1,
      item: "Land 1",
    },
    {
      id: 2,
      item: "Land 2",
    },
    {
      id: 3,
      item: "Land 3",
    },
    {
      id: 4,
      item: "Land 4",
    },
  ];

  const dataMonth = [
    {
      id: 0,
      item: "",
    },
    {
      id: 1,
      item: "Annually",
    },
    {
      id: 2,
      item: "Monthly",
    },
    {
      id: 3,
      item: "Daily",
    },
  ];

  const selectPeriodHandler = (idx: number) => {
    setModeNumber(idx);
    setActivePeriodList(false);
  };
  const selectLandHandler = (idx: number) => {
    setLandNumber(idx);
    setActiveLandsList(false);
  };

  const labelsArray = [
    {
      data: ["2019", "2020", "2021", "2022", "2023"],
      metric: [
        [1353, 1256, 3146, 1623, 7442],
        [1346, 7542, 4316, 3164, 6434],
      ],
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
      metric: [
        [
          1234, 2304, 4543, 1444, 2453, 5641, 1244, 3554, 3412, 4340, 3421,
          4214,
        ],
        [
          2234, 4304, 1543, 4544, 6413, 2641, 3244, 2554, 7412, 12340, 5421,
          6214,
        ],
      ],
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
      metric: [
        [
          1234, 5678, 9876, 4321, 8765, 3456, 7890, 2109, 6543, 9087, 2345,
          6789, 5432, 9870, 3210, 7654, 1098, 5432, 8765, 2109, 6543, 9087,
          2345, 6789, 5432, 9870, 3210, 7654, 1098, 5432, 8765,
        ],
        [
          3827, 6154, 13014, 10401, 4782, 12095, 6619, 13833, 9975, 6230, 14729,
          5394, 13769, 3258, 11561, 12687, 13115, 12261, 4571, 14141, 11812,
          10681, 14103, 14145, 4549, 13046, 15000, 13866, 3113, 13122, 8247,
        ],
      ],
    },
  ];

  const data = {
    labels: labelsArray[modeNumber - 1].data,
    datasets: [
      {
        label: "All views",
        data: labelsArray[modeNumber - 1].metric[0], // Значения точек на графике
        fill: false, // Отключаем заливку под графиком
        borderColor: "rgba(41, 171, 226, 1)", // Цвет линии графика
        tension: 0.4, // Натяжение линии графика
        pointRadius: 0,
        hoverRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Clicks on wishes",
        data: labelsArray[modeNumber - 1].metric[1], // Значения точек на графике
        fill: false, // Отключаем заливку под графиком
        borderColor: "rgba(18, 182, 119, 1)", // Цвет линии графика
        tension: 0.4, // Натяжение линии графика
        pointRadius: 0,
        hoverRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    interaction: {
      intersect: false,
      mode: "index",
    } as any,
    maintainAspectRatio: false,
    scales: {
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#8A97AA",
          font: {
            family: "Inter", // Шрифт
            size: 10, // Размер шрифта
          },
        },
      },
      x: {
        border: {
          display: true,
          color: "#8A97AA",
        },
        grid: {
          display: false,
        },
        ticks: {
          padding: 10,
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
        display: false, // Скрыть легенду
      },
      tooltip: {
        enabled: true, // Включить всплывающие подсказки
        displayColors: false, // Не показывать цвета точек в подсказках
      },
    },
  };

  const landRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (landRef.current && !landRef.current.contains(event.target as Node)) {
        setActiveLandsList(false);
      }
      if (
        periodRef.current &&
        !periodRef.current.contains(event.target as Node)
      ) {
        setActivePeriodList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="analytics__item analytics__profileview">
      <div className="analytics__item-top">
        <div className="analytics__item-title" style={{ marginRight: 31 }}>
          Profile view
        </div>
        <div
          className="analytics__activities"
          style={{ marginLeft: "auto", marginRight: 29 }}
        >
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
            All views
          </div>
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
            Clicks on wishes
          </div>
        </div>
        <div className="analytics__generals">
          <div
            className="saleplace__general-trial saleplace__general-trial-select"
            style={{ marginLeft: "auto", marginRight: 8 }}
            ref={landRef}
          >
            <div
              className="saleplace__general-trial-inputbox saleplace__qraph-list"
              onClick={() => setActiveLandsList(true)}
            >
              <span
                className={
                  isActivePeriodList || modeNumber
                    ? "addwallet__span addwallet__span--active"
                    : "addwallet__span"
                }
                style={{ opacity: 0, visibility: "hidden" }}
              >
                Periodicity
              </span>
              <svg
                width="5"
                height="4"
                viewBox="0 0 5 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.94228 3.53366L0.208944 1.80033C-0.00216758 1.58921 -0.0492786 1.34766 0.0676103 1.07566C0.184499 0.803659 0.392722 0.667437 0.692277 0.666992H4.12561C4.42561 0.666992 4.63405 0.803214 4.75094 1.07566C4.86783 1.3481 4.8205 1.58966 4.60894 1.80033L2.87561 3.53366C2.80894 3.60033 2.73672 3.65033 2.65894 3.68366C2.58117 3.71699 2.49783 3.73366 2.40894 3.73366C2.32005 3.73366 2.23672 3.71699 2.15894 3.68366C2.08117 3.65033 2.00894 3.60033 1.94228 3.53366Z"
                  fill="#8A97AA"
                />
              </svg>

              <div className="addwallet__select-title">
                {dataLands[landNumber].item}
              </div>
            </div>
            {isActiveLandsList && (
              <ul className="saleplace__general-select-list addwallet__list exchange__list saleplace__qraph-list">
                {dataLands.map((el, idx) => (
                  <li
                    className={
                      landNumber === idx
                        ? "saleplace__general-select-item saleplace__general-select-item--active"
                        : "saleplace__general-select-item"
                    }
                    onClick={() => selectLandHandler(idx)}
                    key={idx}
                  >
                    {el.item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className="saleplace__general-trial saleplace__general-trial-select"
            ref={periodRef}
          >
            <div
              className="saleplace__general-trial-inputbox saleplace__qraph-list"
              onClick={() => setActivePeriodList(true)}
            >
              <span
                className={
                  isActivePeriodList || modeNumber
                    ? "addwallet__span addwallet__span--active"
                    : "addwallet__span"
                }
                style={{ opacity: 0, visibility: "hidden" }}
              >
                Periodicity
              </span>
              <svg
                width="5"
                height="4"
                viewBox="0 0 5 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.94228 3.53366L0.208944 1.80033C-0.00216758 1.58921 -0.0492786 1.34766 0.0676103 1.07566C0.184499 0.803659 0.392722 0.667437 0.692277 0.666992H4.12561C4.42561 0.666992 4.63405 0.803214 4.75094 1.07566C4.86783 1.3481 4.8205 1.58966 4.60894 1.80033L2.87561 3.53366C2.80894 3.60033 2.73672 3.65033 2.65894 3.68366C2.58117 3.71699 2.49783 3.73366 2.40894 3.73366C2.32005 3.73366 2.23672 3.71699 2.15894 3.68366C2.08117 3.65033 2.00894 3.60033 1.94228 3.53366Z"
                  fill="#8A97AA"
                />
              </svg>

              <div className="addwallet__select-title">
                {dataMonth[modeNumber].item}
              </div>
            </div>
            {isActivePeriodList && (
              <ul className="saleplace__general-select-list addwallet__list exchange__list saleplace__qraph-list">
                {dataMonth.map((el, idx) => (
                  <li
                    className={
                      modeNumber === idx
                        ? "saleplace__general-select-item saleplace__general-select-item--active"
                        : "saleplace__general-select-item"
                    }
                    onClick={() => selectPeriodHandler(idx)}
                    key={idx}
                  >
                    {el.item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="analytics__profileview-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
