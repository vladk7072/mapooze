import { FC } from "react";
import { Link } from "react-router-dom";

import {
  WishlistDataType,
  WishlistType,
} from "../../../types/AccountPanel/WishlistTypes/WishlistTypes";
import { SalePanelItem } from "../../SalePanel/SalePanelItem";
import { WishItem } from "./components/WishItem";
import { SaleNavigation } from "../../SalePanel/SaleNavigation";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { saleData } from "./wishlist.data";

export const Wishlist: FC<WishlistType> = ({ setOpenBar }) => {
  const { isMobile } = useAppSelector((state) => state.mainPanelReducer);

  return (
    <div className="addwallet">
      {isMobile && (
        <Link onClick={() => setOpenBar(true)} to="..">
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
      )}
      <div className="addwallet__mob-title">Wishlist</div>
      <div className="addwallet__error-title">
        <span></span>
        <Link className="account__close" to="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3002 5.71022C18.2077 5.61752 18.0978 5.54397 17.9768 5.49379C17.8559 5.44361 17.7262 5.41778 17.5952 5.41778C17.4643 5.41778 17.3346 5.44361 17.2136 5.49379C17.0926 5.54397 16.9827 5.61752 16.8902 5.71022L12.0002 10.5902L7.11022 5.70022C7.01764 5.60764 6.90773 5.5342 6.78677 5.4841C6.6658 5.43399 6.53615 5.4082 6.40522 5.4082C6.27429 5.4082 6.14464 5.43399 6.02368 5.4841C5.90272 5.5342 5.79281 5.60764 5.70022 5.70022C5.60764 5.79281 5.5342 5.90272 5.4841 6.02368C5.43399 6.14464 5.4082 6.27429 5.4082 6.40522C5.4082 6.53615 5.43399 6.6658 5.4841 6.78677C5.5342 6.90773 5.60764 7.01764 5.70022 7.11022L10.5902 12.0002L5.70022 16.8902C5.60764 16.9828 5.5342 17.0927 5.4841 17.2137C5.43399 17.3346 5.4082 17.4643 5.4082 17.5952C5.4082 17.7262 5.43399 17.8558 5.4841 17.9768C5.5342 18.0977 5.60764 18.2076 5.70022 18.3002C5.79281 18.3928 5.90272 18.4662 6.02368 18.5163C6.14464 18.5665 6.27429 18.5922 6.40522 18.5922C6.53615 18.5922 6.6658 18.5665 6.78677 18.5163C6.90773 18.4662 7.01764 18.3928 7.11022 18.3002L12.0002 13.4102L16.8902 18.3002C16.9828 18.3928 17.0927 18.4662 17.2137 18.5163C17.3346 18.5665 17.4643 18.5922 17.5952 18.5922C17.7262 18.5922 17.8558 18.5665 17.9768 18.5163C18.0977 18.4662 18.2076 18.3928 18.3002 18.3002C18.3928 18.2076 18.4662 18.0977 18.5163 17.9768C18.5665 17.8558 18.5922 17.7262 18.5922 17.5952C18.5922 17.4643 18.5665 17.3346 18.5163 17.2137C18.4662 17.0927 18.3928 16.9828 18.3002 16.8902L13.4102 12.0002L18.3002 7.11022C18.6802 6.73022 18.6802 6.09022 18.3002 5.71022Z"
              fill="#29ABE2"
            />
          </svg>
        </Link>
      </div>

      <div className="wishlist">
        <div className="salepanel__safe wishlist__safe">
          <div className="salepanel__top wishlist__table-top">
            <div className="salepanel__box">
              <div className="salepanel__top-title">#</div>
            </div>
            <div className="salepanel__box">
              <div className="salepanel__top-title">
                Land
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
            <div className="salepanel__box">
              <div className="salepanel__top-title"> Land Owner</div>
            </div>
            <div className="salepanel__box">
              <div className="salepanel__top-title">Status</div>
            </div>
            <div className="salepanel__box">
              <div className="salepanel__top-title">Price</div>
            </div>
          </div>
          {saleData.map((item, idx) => (
            <WishItem item={item} key={idx} count={idx} />
          ))}
        </div>
        <SaleNavigation />
      </div>
    </div>
  );
};
