import { FC, useEffect, useState } from "react";

interface IProps {
  activityValue: number;
  onlyViewValue: number;
  svg: any;
  title: string;
}

export const CountryActivityItem: FC<IProps> = ({
  activityValue,
  onlyViewValue,
  svg,
  title,
}) => {
  const [activeNumber, setActiveNumber] = useState<number>(0);
  const [viewsNumber, setViewsNumber] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeNumber < activityValue) {
        setActiveNumber((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
      if (viewsNumber < onlyViewValue) {
        setViewsNumber((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }

      
    }, 7);

    return () => {
      clearInterval(interval);
    };
  }, [activeNumber, viewsNumber]);

  return (
    <li className="analytics__country-item">
      <div className="analytics__country-flag">{svg}</div>
      <div className="analytics__country-box">
        <div className="analytics__country-box-top">
          <div className="analytics__country-name">{title}</div>
          <div className="analytics__country-proc">
            <span style={{ color: "#29ABE2" }}>{activeNumber}%</span>/
            <span style={{ color: "#12B677" }}>{viewsNumber}%</span>
          </div>
        </div>
        <div className="analytics__country-line">
          <span
            className="analytics__country-span-1"
            style={{ width: `${viewsNumber}%` }}
          ></span>
          <span
            className="analytics__country-span-2"
            style={{ width: `${activeNumber}%` }}
          ></span>
        </div>
      </div>
    </li>
  );
};
