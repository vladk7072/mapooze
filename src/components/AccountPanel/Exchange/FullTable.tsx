import { FC } from "react";
import { Link } from "react-router-dom";
import { FullItem } from "./FullItem";
import { SaleNavigation } from "../../SalePanel/SaleNavigation";
import { useAppSelector } from "../../../hooks/redux-hooks";

export const FullTable: FC<any> = ({ setOpenBar }) => {
  const { isMobile } = useAppSelector((state) => state.mainPanelReducer);

  return (
    <div className="addwallet">
      {isMobile ? (
        <Link onClick={() => setOpenBar(false)} to="../exchange">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
              fill="white"
              style={{ fill: "white" }}
            />
          </svg>
        </Link>
      ) : (
        <Link to="../exchange">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
              fill="#29ABE2"
              style={{ fill: "#29ABE2" }}
            />
          </svg>
        </Link>
      )}
      <div className="addwallet__mob-title">Full table for Exchange</div>
      <div className="addwallet__error-title addwallet__error-title--active addwallet__error-title--mt20">
        You can select the land for exchange
      </div>

      <div className="wishlist fullitem">
        <div className="salepanel__safe">
          <div className="salepanel__top">
            <div className="salepanel__box fullitem__box-bor">
              <div
                className="salepanel__top-title"
                style={{ justifyContent: "center" }}
              >
                #
              </div>
            </div>
            <div className="salepanel__box fullitem__box-bor">
              <div className="salepanel__top-title">
                Land for Exchang
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.00118 4.3869e-05C6.73596 4.3869e-05 6.48161 0.1054 6.29407 0.292936C6.10653 0.480473 6.00118 0.734827 6.00118 1.00004L6.00118 12.586L1.70918 8.29204C1.6162 8.19907 1.50582 8.12531 1.38435 8.075C1.26287 8.02468 1.13267 7.99878 1.00118 7.99878C0.86969 7.99878 0.73949 8.02468 0.618011 8.075C0.496531 8.12531 0.386153 8.19907 0.293178 8.29204C0.200202 8.38502 0.126449 8.4954 0.0761309 8.61688C0.0258131 8.73836 -8.4877e-05 8.86856 -8.4877e-05 9.00004C-8.4877e-05 9.13153 0.0258131 9.26173 0.0761309 9.38321C0.126449 9.50469 0.200202 9.61507 0.293178 9.70804L6.29318 15.708C6.38607 15.8012 6.49642 15.8751 6.61791 15.9255C6.7394 15.9759 6.86964 16.0018 7.00118 16.0018C7.13271 16.0018 7.26295 15.9759 7.38445 15.9255C7.50594 15.8751 7.61629 15.8012 7.70918 15.708L13.7092 9.70804C13.897 9.52027 14.0024 9.26559 14.0024 9.00004C14.0024 8.73449 13.897 8.47982 13.7092 8.29204C13.5214 8.10427 13.2667 7.99878 13.0012 7.99878C12.7356 7.99878 12.481 8.10427 12.2932 8.29204L8.00118 12.586L8.00118 1.00004C8.00118 0.734827 7.89582 0.480473 7.70828 0.292936C7.52075 0.1054 7.26639 4.3869e-05 7.00118 4.3869e-05Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="salepanel__box fullitem__box-bor">
              <div className="salepanel__top-title">Price</div>
            </div>
            <div className="salepanel__box fullitem__box-bor">
              <div className="salepanel__top-title">My Land</div>
            </div>
            <div className="salepanel__box fullitem__box-bor">
              <div className="salepanel__top-title">Extra Pay</div>
            </div>
            <div className="salepanel__box fullitem__box-bor ">
              <div className="salepanel__top-title">Exchange</div>
            </div>
          </div>
          <FullItem num={1} />
          <FullItem num={2} />
          <FullItem num={3} />
          <FullItem num={4} />
          <FullItem num={5} />
          <FullItem num={6} />
          <FullItem num={7} />
          <FullItem num={8} />
          <FullItem num={9} />
          <FullItem num={10} />
        </div>
        <SaleNavigation />
      </div>
    </div>
  );
};
