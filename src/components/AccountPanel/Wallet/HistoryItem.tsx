import React, { FC } from "react";
import {
  ItemCardInfoType,
  dataHistoryCardInfoType,
  dataHistoryItemCardInfoType,
} from "../../../types/AccountPanel/AccountWalletTypes/AddWalletTypes";

export const HistoryItem: FC<ItemCardInfoType> = ({ item }) => {

  return (
    <div className="cardinfo__history-box">
      <div className="cardinfo__history-box-top">
        <div className="cardinfo__history-box-subtitle">{item.date}</div>
        <div className="cardinfo__history-box-count">{item.profite}</div>
      </div>
      {item.items.map((el: dataHistoryItemCardInfoType, idx: number) => (
        <div className="cardinfo__history-item" key={idx}>
          <div className="cardinfo__history-title">{el.title}</div>
          <div className="cardinfo__history-item-box">
            <div className="cardinfo__history-item-time">{el.time}</div>
            <div
              className={
                el.profite < 0
                  ? "cardinfo__history-item-count cardinfo__history-item-count--down"
                  : "cardinfo__history-item-count"
              }
            >
              {el.profite}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
