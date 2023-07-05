import { FC } from "react";
//@ts-ignore
import previewmap from "../../../../assets/images/account/previewmap.jpg";
import { dataFonts, dataSize, dataWeight } from "../lands.data";
import { useAppSelector } from "../../../../hooks/redux-hooks";

interface IProps {
  setPreviewMode: (args: boolean) => void;
}

export const PreviewMap: FC<IProps> = ({ setPreviewMode }) => {
  const { selectFont, selectWeight, color, angle, selectSize } = useAppSelector(
    (state) => state.myLandsReducer
  );

  return (
    <div
      className="lands__preview"
      style={{
        backgroundImage: `url(${previewmap})`,
      }}
    >
      <div
        className="lands__preview-close"
        onClick={() => setPreviewMode(false)}
      >
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
      </div>
      <div className="lands__preview-det">
        <div
          className="lands__preview-title"
          style={
            selectFont !== null
              ? {
                  fontFamily: `${dataFonts[selectFont].item}`,
                  fontWeight: `${
                    dataWeight[selectFont].weights[
                      selectWeight !== null ? selectWeight : 400
                    ]
                  }`,
                  fontSize: `${dataSize[selectSize].size}px`,
                  color: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                  transform: `rotate(${angle}deg)`,
                }
              : {}
          }
        >
          Rome, Italy
        </div>
        <div className="lands__preview-marker">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_380_60577)">
              <path
                d="M20.5 21.1152C9.17695 21.1152 0 25.5064 0 30.9193C0 36.3323 9.17695 40.7313 20.5 40.7313C31.823 40.7313 41 36.3401 41 30.9193C41 25.4986 31.823 21.1152 20.5 21.1152ZM33.4086 34.71C30.0693 36.3089 25.3607 37.2214 20.5 37.2214C15.6393 37.2214 10.9307 36.3089 7.59141 34.71C5.17305 33.5478 3.60352 32.0659 3.60352 30.9193C3.60352 29.7728 5.17305 28.2909 7.59141 27.1365C10.9307 25.5376 15.6313 24.6251 20.5 24.6251C25.3687 24.6251 30.0693 25.5376 33.4086 27.1365C35.835 28.2987 37.3965 29.7806 37.3965 30.9193C37.3965 32.0581 35.827 33.5478 33.4086 34.71Z"
                fill="#DE2C2C"
              />
              <path
                d="M33.4971 13.7754C33.4971 16.4117 32.424 19.2819 30.2699 22.3784C28.284 25.2331 25.3691 28.3061 21.5094 31.5975C20.9328 32.0889 20.076 32.0889 19.4994 31.5975C15.6396 28.3061 12.7248 25.2331 10.7389 22.3784C8.58477 19.2819 7.51172 16.4117 7.51172 13.7754C7.51172 9.82102 8.81699 6.66998 11.4275 4.3223C14.0381 1.97462 17.065 0.796875 20.5004 0.796875C23.9357 0.796875 26.9627 1.96682 29.5732 4.3145C32.1838 6.66218 33.4971 9.81322 33.4971 13.7754Z"
                fill="#DE2C2C"
              />
              <path
                d="M20.4994 31.9641C19.9949 31.9641 19.5145 31.7847 19.1381 31.4649C15.4064 28.2827 12.5316 25.2564 10.6018 22.4798C8.47168 19.4145 7.39062 16.5131 7.39062 13.869C7.39062 9.90682 8.72793 6.70118 11.3545 4.3379C13.973 1.99022 17.048 0.796875 20.4994 0.796875C23.9508 0.796875 27.0258 1.99022 29.6443 4.3379C32.2789 6.70118 33.6082 9.90682 33.6082 13.869C33.6082 16.5131 32.5271 19.4067 30.3971 22.4798C28.4672 25.2564 25.6004 28.2827 21.8607 31.4649C21.4844 31.7847 21.0039 31.9641 20.4994 31.9641ZM20.4994 4.2521C17.8008 4.2521 15.5826 5.13346 13.7168 6.93517C11.875 8.71348 10.9461 11.0456 10.9461 13.869C10.9461 15.6473 11.7629 17.761 13.3885 20.1477C14.982 22.4954 17.3764 25.1473 20.5074 28.0253C23.7105 25.1473 26.1209 22.4954 27.6744 20.1555C29.26 17.761 30.0607 15.6473 30.0607 13.869C30.0607 11.0534 29.1318 8.72128 27.29 6.93517C25.4162 5.13346 23.198 4.2521 20.4994 4.2521Z"
                fill="#F497E5"
              />
            </g>
            <defs>
              <clipPath id="clip0_380_60577">
                <rect
                  y="0.796875"
                  width="41"
                  height="39.934"
                  rx="10"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
