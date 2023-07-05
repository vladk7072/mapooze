import { FC } from "react";
import { string } from "yup";

interface IProps {
  title: string;
}

export const LandBlock: FC<IProps> = ({ title }) => {
  return (
    <div className="analytics__item analytics__item-landblock">
      <div className="analytics__item-top">
        <div className="analytics__item-title">{title}</div>
      </div>
      <div className="analytics__inner">
        <div className="saleplace__general-item">
          <div
            className="saleplace__general-title"
            style={{ display: "flex", alignItems: "center", gap: 7 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3332 13.2533V14.6666L12.1332 13.8866L8.9399 7.88665C9.37756 7.74948 9.78175 7.52241 10.1266 7.21998M9.9999 4.66665C9.9999 5.19708 9.78919 5.70579 9.41411 6.08086C9.03904 6.45593 8.53033 6.66665 7.9999 6.66665C7.90224 6.67323 7.80424 6.67323 7.70657 6.66665L3.86657 13.8866L2.66657 14.6666V13.2533L6.52657 5.99998C6.27014 5.71331 6.10181 5.35879 6.04175 4.97888C5.98169 4.59898 6.03244 4.20982 6.18793 3.85803C6.34343 3.50624 6.59706 3.20675 6.91843 2.99544C7.23981 2.78413 7.6153 2.66998 7.9999 2.66665V1.33331C8.17671 1.33331 8.34628 1.40355 8.47131 1.52858C8.59633 1.6536 8.66657 1.82317 8.66657 1.99998V2.78665C9.0556 2.92419 9.39257 3.17869 9.63128 3.51527C9.86998 3.85185 9.99874 4.25402 9.9999 4.66665ZM8.66657 4.66665C8.66657 4.53479 8.62747 4.4059 8.55422 4.29627C8.48096 4.18663 8.37684 4.10118 8.25502 4.05073C8.13321 4.00027 7.99916 3.98707 7.86984 4.01279C7.74052 4.03851 7.62173 4.10201 7.5285 4.19524C7.43526 4.28848 7.37177 4.40727 7.34605 4.53659C7.32032 4.66591 7.33352 4.79995 7.38398 4.92177C7.43444 5.04359 7.51989 5.1477 7.62952 5.22096C7.73915 5.29421 7.86805 5.33331 7.9999 5.33331C8.17671 5.33331 8.34628 5.26307 8.47131 5.13805C8.59633 5.01303 8.66657 4.84346 8.66657 4.66665ZM2.81324 6.66665L3.9999 7.86665L3.0399 9.70665L1.3999 8.06665M7.9999 11.84L6.9999 10.8333L5.9999 12.6666L7.9999 14.6666L9.9999 12.6666L9.0199 10.82M13.1866 6.66665L11.9999 7.86665L12.9999 9.70665L14.5999 8.06665L13.1866 6.66665Z"
                fill="#29ABE2"
              />
            </svg>{" "}
            Total Area
          </div>
        </div>
        <div
          className="saleplace__general-item"
          style={{ justifyContent: "space-between" }}
        >
          <div className="saleplace__general-title">100,001,025</div>
          <div className="saleplace__general-btns">
            <div className="saleplace__general-btn saleplace__general-btn--active">
              km2
            </div>
            <div className="saleplace__general-btn">ha</div>
            <div className="saleplace__general-btn">acre</div>
          </div>
        </div>
        <div
          className="saleplace__general-item"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 7,
            marginTop: 18,
          }}
        >
          <div
            className="saleplace__general-title"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            <svg
              width="16"
              height="25"
              viewBox="0 0 16 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_380_59926)">
                <path
                  d="M7.63456 18.797L0.986695 15.545L7.62853 24.5L8.62636 23.1545V18.3103L7.63456 18.797ZM7.62853 0.5L0 14.2144H15.2572L7.62853 0.5Z"
                  fill="#29ABE2"
                />
                <path
                  d="M15.2576 14.2347L7.62891 0.5V14.2347H15.2576Z"
                  fill="#2493C2"
                />
                <path
                  d="M7.69822 11.3395L7.66828 11.3252L4.53358 13.2741L0.988281 15.5441L7.67502 18.8252L7.70496 18.8109L8.69605 18.325V11.8291L7.69822 11.3395Z"
                  fill="#1E789E"
                />
                <path
                  d="M11.6577 13.9512L7.69791 11.3395L7.66797 11.3252L7.67471 18.8252L7.70465 18.8109L14.2368 15.5795L11.6577 13.9512Z"
                  fill="#1E789E"
                />
                <path
                  d="M7.62782 10.4899L7.59788 10.4756L0 14.2256H0.00678382L7.60462 17.9756L7.63456 17.9613L8.62566 17.4754V10.9795L7.62782 10.4899Z"
                  fill="#1F7EA6"
                />
                <path
                  d="M7.63499 18.7971L7.62891 24.5001L14.2755 15.5391L7.63499 18.7971Z"
                  fill="#2493C2"
                />
                <path
                  d="M15.242 14.2256L7.6276 10.4899L7.59766 10.4756L7.60439 17.9756L7.63434 17.9613L15.2488 14.2256H15.242Z"
                  fill="#1D7296"
                />
              </g>
              <defs>
                <clipPath id="clip0_380_59926">
                  <rect
                    width="15.2627"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Total Amount
          </div>
          <div className="saleplace__general-title">208,164</div>
        </div>
      </div>
    </div>
  );
};
