import { FC, useState } from "react";
import { HistoryItem } from "../HistoryItem";
import { dataHistory } from "../wallet.data";

export const CardInfoHistory: FC = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const dataBtns = [
    {
      name: "All",
    },
    {
      name: "Income",
    },
    {
      name: "Spending",
    },
  ];

  return (
    <div className="cardinfo__history">
      <div className="cardinfo__history-top">
        {dataBtns.map((btn, idx) => (
          <div
            className={
              activeBtn === idx
                ? "cardinfo__history-btn cardinfo__history-btn--active"
                : "cardinfo__history-btn"
            }
            key={idx}
            onClick={() => setActiveBtn(idx)}
          >
            {btn.name}
          </div>
        ))}
      </div>
      <div className="cardinfo__history-list">
        {dataHistory.map((item, idx) => (
          <HistoryItem item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};
