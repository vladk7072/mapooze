import { FC, useEffect } from "react";
import { mainSlice } from "../../store/slices/main.slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/redux-hooks";
import cn from "clsx";

export const Cookie: FC = () => {
  const dispatch = useDispatch();
  const { setCookieNotification } = mainSlice.actions;
  const { cookieNotification } = useAppSelector(
    (state) => state.mainPanelReducer
  );
  const { isOpenAside } = useAppSelector((state) => state.asidePanelReducer);

  const handleCookieAllow = () => {
    sessionStorage.setItem("cookieVisible", "false");
    dispatch(setCookieNotification(false));
  };

  useEffect(() => {
    const isVisibleCookie = sessionStorage.getItem("cookieVisible");
    if (isVisibleCookie === "false") {
      dispatch(setCookieNotification(false));
    } else {
      dispatch(setCookieNotification(true));
    }
  }, []);

  return (
    <div
      className={cn("cookie", {
        "cookie--active": cookieNotification,
        "cookie--open": isOpenAside,
      })}
    >
      <div className="cookie__image">
        <svg
          width="90"
          height="69"
          viewBox="0 0 90 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.8006 54.7293C50.8006 54.7293 42.0938 51.4399 36.0037 39.4392C29.9136 27.4384 38.8408 12.7777 38.8408 12.7777L38.1901 11.7784C35.2914 10.8048 32.1884 10.2764 28.9617 10.2764C12.9665 10.2764 0 23.243 0 39.2381C0 55.2331 12.9665 68.1998 28.9615 68.1998C38.2516 68.1998 46.5191 63.825 51.8187 57.024L50.8006 54.7293Z"
            fill="#29ABE2"
          />
          <path
            d="M9.99896 39.2389C9.99896 24.9495 20.3481 13.0782 33.9597 10.7089C32.3092 10.4215 30.637 10.2772 28.9617 10.2773C12.9665 10.2772 0 23.2438 0 39.2389C0 55.2339 12.9665 68.2006 28.9615 68.2006C30.6664 68.2006 32.3365 68.0519 33.9608 67.7692C20.3486 65.4002 9.99896 53.5287 9.99896 39.2389Z"
            fill="#218DBA"
          />
          <path
            d="M89.4207 23.7864C89.241 22.9028 88.3205 22.4039 87.4619 22.6797C84.2158 23.7218 80.6107 22.1197 79.2394 18.957C78.9512 18.292 78.2359 17.9083 77.5308 18.0764C70.4129 19.7735 63.3166 15.0144 62.1294 7.84484C62.0146 7.15156 61.4177 6.64531 60.7161 6.604C58.3927 6.46689 56.4267 4.80699 55.8853 2.5605C55.6914 1.75648 54.8767 1.26042 54.0737 1.4587C41.2287 4.6305 31.7604 16.3725 32.0863 30.2712C32.4516 45.8459 45.252 58.4264 60.8306 58.5363C76.9216 58.6498 90.0013 45.6401 90.0013 29.5753C90.0013 27.5926 89.8009 25.6569 89.4207 23.7864Z"
            fill="#29ABE2"
          />
          <path
            d="M42.0853 30.271C41.8254 19.1913 47.7901 9.48206 56.7275 4.39267C56.3312 3.84197 56.0453 3.21982 55.8853 2.5605C55.6914 1.75648 54.8767 1.26042 54.0737 1.4587C41.2287 4.6305 31.7604 16.3725 32.0863 30.2712C32.4516 45.8459 45.252 58.4264 60.8306 58.5363C62.5817 58.5492 64.3304 58.4044 66.0555 58.1035C52.7158 55.7665 42.4124 44.2207 42.0853 30.271Z"
            fill="#218DBA"
          />
          <path
            d="M83.5792 8.38102C85.0748 8.38102 86.2873 7.16856 86.2873 5.67293C86.2873 4.17729 85.0748 2.96484 83.5792 2.96484C82.0835 2.96484 80.8711 4.17729 80.8711 5.67293C80.8711 7.16856 82.0835 8.38102 83.5792 8.38102Z"
            fill="#218DBA"
          />
          <path
            d="M71.6829 8.29055C73.7514 8.29055 75.4282 6.61369 75.4282 4.54518C75.4282 2.47667 73.7514 0.799805 71.6829 0.799805C69.6144 0.799805 67.9375 2.47667 67.9375 4.54518C67.9375 6.61369 69.6144 8.29055 71.6829 8.29055Z"
            fill="#218DBA"
          />
          <path
            d="M83.6703 5.67281C83.6703 4.68984 84.1957 3.83186 84.9793 3.35725C84.5578 3.10056 84.0738 2.96471 83.5803 2.96455C82.0845 2.96455 80.8722 4.17709 80.8722 5.67264C80.8722 7.16818 82.0847 8.3809 83.5803 8.3809C84.0738 8.38085 84.5578 8.24499 84.9793 7.9882C84.1957 7.51377 83.6703 6.65578 83.6703 5.67281ZM71.6829 4.54518C71.6829 3.15967 72.4371 1.95275 73.5556 1.305C72.987 0.974075 72.3408 0.79976 71.6829 0.799805C69.6143 0.799805 67.9375 2.47658 67.9375 4.54518C67.9375 6.61377 69.6143 8.29055 71.6829 8.29055C72.366 8.29055 73.0042 8.10475 73.5556 7.78535C72.4371 7.13742 71.6829 5.93068 71.6829 4.54518Z"
            fill="#196383"
          />
          <path
            d="M20.5102 53.7157C24.8543 53.7157 28.3759 50.1942 28.3759 45.8501C28.3759 41.506 24.8543 37.9844 20.5102 37.9844C16.1661 37.9844 12.6445 41.506 12.6445 45.8501C12.6445 50.1942 16.1661 53.7157 20.5102 53.7157Z"
            fill="#196383"
          />
          <path
            d="M2.4742 39.4399C5.08754 39.4399 7.20605 37.3214 7.20605 34.7082C7.20605 32.0951 5.08754 29.9766 2.4742 29.9766C2.13318 29.9766 1.80096 30.0135 1.48051 30.082C0.571191 32.8123 0.0582617 35.7232 0.0078125 38.7468C0.750117 39.2013 1.60382 39.4412 2.4742 39.4399Z"
            fill="#11485F"
          />
          <path
            d="M18.9763 29.7631C21.5736 29.7631 23.6791 27.6576 23.6791 25.0603C23.6791 22.463 21.5736 20.3574 18.9763 20.3574C16.379 20.3574 14.2734 22.463 14.2734 25.0603C14.2734 27.6576 16.379 29.7631 18.9763 29.7631Z"
            fill="#196383"
          />
          <path
            d="M39.7053 58.5371C36.7636 58.5371 34.3789 60.9219 34.3789 63.8636C34.3789 65.2235 34.8892 66.4634 35.7277 67.4047C39.0865 66.6005 42.2163 65.2089 45.0065 63.3481C44.747 60.6482 42.4729 58.5371 39.7053 58.5371Z"
            fill="#196383"
          />
          <path
            d="M45.0347 43.5937C45.0347 39.7353 41.9069 36.6074 38.0485 36.6074C36.2827 36.6074 34.6713 37.2638 33.4414 38.3441C34.8738 42.826 37.3726 46.8386 40.6353 50.0833C43.2126 49.055 45.0347 46.538 45.0347 43.5937Z"
            fill="#11485F"
          />
          <path
            d="M50.8015 33.19C52.8083 33.19 54.4351 31.5632 54.4351 29.5564C54.4351 27.5497 52.8083 25.9229 50.8015 25.9229C48.7948 25.9229 47.168 27.5497 47.168 29.5564C47.168 31.5632 48.7948 33.19 50.8015 33.19Z"
            fill="#196383"
          />
          <path
            d="M69.2154 48.2881C73.731 48.2881 77.3916 44.6275 77.3916 40.1118C77.3916 35.5962 73.731 31.9355 69.2154 31.9355C64.6997 31.9355 61.0391 35.5962 61.0391 40.1118C61.0391 44.6275 64.6997 48.2881 69.2154 48.2881Z"
            fill="#196383"
          />
          <path
            d="M70.733 17.7989C66.9637 16.5713 63.8587 13.6053 62.5818 9.69629C60.0182 10.5457 58.168 12.9605 58.168 15.8091C58.168 19.3658 61.0513 22.249 64.6079 22.249C67.47 22.249 69.8945 20.3813 70.733 17.7989Z"
            fill="#196383"
          />
          <path
            d="M17.8389 45.8501C17.8389 42.4164 20.0398 39.4984 23.1074 38.4255C22.2727 38.1333 21.3946 37.9842 20.5102 37.9846C16.1661 37.9846 12.6445 41.5062 12.6445 45.8503C12.6445 50.1944 16.1661 53.716 20.5102 53.716C21.4206 53.716 22.294 53.5595 23.1074 53.2749C20.04 52.2018 17.8389 49.2838 17.8389 45.8501ZM18.3212 25.0603C18.3212 23.1875 19.416 21.5707 21.0005 20.8143C20.3686 20.5126 19.6771 20.3565 18.9769 20.3574C16.3795 20.3574 14.274 22.4629 14.274 25.0603C14.274 27.6576 16.3795 29.7631 18.9769 29.7631C19.7014 29.7631 20.3875 29.5989 21.0005 29.3063C19.416 28.5499 18.3212 26.933 18.3212 25.0603ZM38.4269 63.8633C38.4269 61.6382 39.7917 59.7328 41.7295 58.936C41.0876 58.6719 40.4001 58.5363 39.7061 58.5369C36.7644 58.5369 34.3797 60.9218 34.3797 63.8633C34.3797 65.2231 34.89 66.4631 35.7285 67.4044C36.8596 67.133 37.9732 66.7929 39.063 66.3861C38.6445 65.6111 38.4259 64.744 38.4269 63.8633ZM51.2137 29.5559C51.2137 28.2983 51.8529 27.1904 52.8236 26.5381C52.2255 26.1357 51.5208 25.9213 50.8 25.9223C48.7932 25.9223 47.1664 27.5492 47.1664 29.5559C47.1664 31.5626 48.7932 33.1895 50.8 33.1895C51.5208 33.1905 52.2255 32.9761 52.8236 32.5737C51.8529 31.9214 51.2137 30.8134 51.2137 29.5559ZM66.2318 40.1119C66.2318 36.5045 68.569 33.445 71.8109 32.3592C70.9739 32.0785 70.0968 31.9354 69.2139 31.9356C64.6983 31.9356 61.0376 35.5963 61.0376 40.1119C61.0376 44.6275 64.6983 48.2882 69.2139 48.2882C70.1222 48.2882 70.9948 48.1379 71.8109 47.8646C68.5692 46.7788 66.2318 43.7193 66.2318 40.1119ZM62.2157 15.8091C62.2138 14.3932 62.681 13.0166 63.5443 11.8944C63.1536 11.1944 62.8315 10.4582 62.5822 9.69629C60.0186 10.5457 58.1684 12.9605 58.1684 15.8091C58.1684 19.3658 61.0517 22.249 64.6083 22.249C65.3162 22.249 65.9969 22.1344 66.6338 21.9235C64.0681 21.0755 62.2157 18.6594 62.2157 15.8091Z"
            fill="#11485F"
          />
        </svg>
      </div>
      <div className="cookie__box">
        <div className="cookie__box-info">
          <div className="cookie__title">Cookie Notification</div>
          <div className="cookie__text">
            OUR SERVICE is provided by Mapooze at no cost and is intended for
            use as is.
          </div>
          <div className="cookie__text">
            This page is used to inform visitors regarding our policies with the
            collection of Personal Information if anyone decided to use our
            Service.
          </div>
          <div className="cookie__text">
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.{" "}
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="cookie__btn" onClick={() => handleCookieAllow()}>
          Allow
        </div>
      </div>
    </div>
  );
};