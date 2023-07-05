import React, { FC } from "react";
import { TopItemType } from "../../types/TopPanelTypes";

export const TopItem: FC<TopItemType> = ({ item, count }) => {
  
  const polar = item.proc.charAt(0);

  return (
    <li className="toppanel__item">
      <div className="toppanel__item-count">
        {count + 1}.
      </div>
      <div className="toppanel__item-like">
        {item.like ? (
          <svg
            width="28"
            height="25"
            viewBox="0 0 28 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0003 24.9667L12.067 23.2067C5.20033 16.98 0.666992 12.86 0.666992 7.83333C0.666992 3.71333 3.89366 0.5 8.00033 0.5C10.3203 0.5 12.547 1.58 14.0003 3.27333C15.4537 1.58 17.6803 0.5 20.0003 0.5C24.107 0.5 27.3337 3.71333 27.3337 7.83333C27.3337 12.86 22.8003 16.98 15.9337 23.2067L14.0003 24.9667Z"
              fill="#29ABE2"
            />
          </svg>
        ) : (
          <svg
            width="28"
            height="25"
            viewBox="0 0 28 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1337 21.2333L14.0003 21.3667L13.8537 21.2333C7.52033 15.4867 3.33366 11.6867 3.33366 7.83333C3.33366 5.16667 5.33366 3.16667 8.00033 3.16667C10.0537 3.16667 12.0537 4.5 12.7603 6.31333H15.2403C15.947 4.5 17.947 3.16667 20.0003 3.16667C22.667 3.16667 24.667 5.16667 24.667 7.83333C24.667 11.6867 20.4803 15.4867 14.1337 21.2333ZM20.0003 0.5C17.6803 0.5 15.4537 1.58 14.0003 3.27333C12.547 1.58 10.3203 0.5 8.00033 0.5C3.89366 0.5 0.666992 3.71333 0.666992 7.83333C0.666992 12.86 5.20033 16.98 12.067 23.2067L14.0003 24.9667L15.9337 23.2067C22.8003 16.98 27.3337 12.86 27.3337 7.83333C27.3337 3.71333 24.107 0.5 20.0003 0.5Z"
              fill="#29ABE2"
            />
          </svg>
        )}
      </div>
      <div className="toppanel__item-textbox">
        <div className="toppanel__item-box">
          <div className="toppanel__item-logo">
            {item.logo ? (
              <img src={item.logo} alt="" />
            ) : (
              <div className="toppanel__item-logo--null"></div>
            )}
          </div>
          <div className="toppanel__item-boxtext">
            <div className="toppanel__item-place">{item.place}</div>
            <div className="toppanel__item-name">{item.name}</div>
          </div>
        </div>
        <div className="toppanel__item-eth">{item.eth}</div>
      </div>
      <div className="toppanel__item-pricebox">
        <div className="toppanel__item-price">{item.price}</div>
        <div
          className="toppanel__item-proc"
          style={polar === "+" ? { color: "#FF0000" } : { color: "#12B677" }}
        >
          {item.proc}
        </div>
      </div>
    </li>
  );
};
