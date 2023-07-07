import { FC } from "react";
import { CountryActivityItem } from "./CountryActivityItem";

export const CountryActivity: FC = () => {

  const dataCountriesActivity = [
    {
      svg: (
        <svg
          width="36"
          height="26"
          viewBox="0 0 36 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_380_59957)">
            <path
              d="M32 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 13H36V4C36 2.93913 35.5786 1.92172 34.8284 1.17157C34.0783 0.421427 33.0609 0 32 0Z"
              fill="#005BBB"
            />
            <path
              d="M36 22C36 23.0609 35.5786 24.0783 34.8284 24.8284C34.0783 25.5786 33.0609 26 32 26H4C2.93913 26 1.92172 25.5786 1.17157 24.8284C0.421427 24.0783 0 23.0609 0 22V13H36V22Z"
              fill="#FFD500"
            />
          </g>
          <defs>
            <clipPath id="clip0_380_59957">
              <rect width="36" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      activityValue: 30,
      onlyViewValue: 50,
      title: "Ukraine",
    },
    {
      svg: (
        <svg
          width="36"
          height="26"
          viewBox="0 0 36 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_380_59969)">
            <path
              d="M35.445 2C34.752 0.809 33.477 0 32 0H18V2H35.445ZM0 20H36V22H0V20ZM18 12H36V14H18V12ZM18 8H36V10H18V8ZM0 16H36V18H0V16ZM4 26H32C33.477 26 34.752 25.191 35.445 24H0.555C1.248 25.191 2.523 26 4 26ZM18 4H36V6H18V4Z"
              fill="#B22334"
            />
            <path
              d="M0.068 22.679C0.085 22.772 0.104 22.865 0.127 22.956C0.153 23.057 0.185 23.154 0.219 23.252C0.308 23.511 0.416 23.761 0.552 23.995L0.555 24H35.445L35.447 23.996C35.5812 23.7602 35.6924 23.5121 35.779 23.255C35.8449 23.0673 35.8957 22.8747 35.931 22.679C35.972 22.459 36 22.233 36 22H0C0 22.233 0.028 22.458 0.068 22.679ZM0 18H36V20H0V18ZM0 14V16H36V14H18H0ZM18 10H36V12H18V10ZM18 6H36V8H18V6ZM0.128 3.044C0.153 2.942 0.188 2.845 0.22 2.747C0.185273 2.8447 0.15458 2.94378 0.128 3.044ZM18 4H36C36 3.767 35.972 3.541 35.931 3.32C35.896 3.12411 35.8448 2.93145 35.778 2.744C35.6913 2.48581 35.5798 2.23665 35.445 2H18V4Z"
              fill="#EEEEEE"
            />
            <path
              d="M18 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 14H18V0Z"
              fill="#3C3B6E"
            />
            <path
              d="M2 2.726L2.618 3.175L2.382 3.9L2.999 3.452L3.617 3.9L3.381 3.175L3.999 2.726H3.235L2.999 2L2.764 2.726H2ZM4 4.726L4.618 5.175L4.382 5.9L4.999 5.452L5.617 5.9L5.381 5.175L5.999 4.726H5.235L4.999 4L4.764 4.726H4ZM8 4.726L8.618 5.175L8.382 5.9L8.999 5.452L9.617 5.9L9.381 5.175L9.999 4.726H9.235L8.999 4L8.764 4.726H8ZM12 4.726L12.618 5.175L12.382 5.9L12.999 5.452L13.617 5.9L13.381 5.175L13.999 4.726H13.235L12.999 4L12.764 4.726H12ZM4 8.726L4.618 9.175L4.382 9.9L4.999 9.452L5.617 9.9L5.381 9.175L5.999 8.726H5.235L4.999 8L4.764 8.726H4ZM8 8.726L8.618 9.175L8.382 9.9L8.999 9.452L9.617 9.9L9.381 9.175L9.999 8.726H9.235L8.999 8L8.764 8.726H8ZM12 8.726L12.618 9.175L12.382 9.9L12.999 9.452L13.617 9.9L13.381 9.175L13.999 8.726H13.235L12.999 8L12.764 8.726H12ZM6 2.726L6.618 3.175L6.382 3.9L6.999 3.452L7.617 3.9L7.381 3.175L7.999 2.726H7.235L6.999 2L6.764 2.726H6ZM10 2.726L10.618 3.175L10.382 3.9L10.999 3.452L11.617 3.9L11.381 3.175L11.999 2.726H11.235L10.999 2L10.764 2.726H10ZM14 2.726L14.618 3.175L14.382 3.9L14.999 3.452L15.617 3.9L15.381 3.175L15.999 2.726H15.235L14.999 2L14.764 2.726H14ZM2 6.726L2.618 7.175L2.382 7.9L2.999 7.452L3.617 7.9L3.381 7.175L3.999 6.726H3.235L2.999 6L2.764 6.726H2ZM6.382 7.9L6.999 7.452L7.617 7.9L7.381 7.175L7.999 6.726H7.235L6.999 6L6.764 6.726H6L6.618 7.175L6.382 7.9ZM10 6.726L10.618 7.175L10.382 7.9L10.999 7.452L11.617 7.9L11.381 7.175L11.999 6.726H11.235L10.999 6L10.764 6.726H10ZM14 6.726L14.618 7.175L14.382 7.9L14.999 7.452L15.617 7.9L15.381 7.175L15.999 6.726H15.235L14.999 6L14.764 6.726H14ZM2 10.726L2.618 11.175L2.382 11.9L2.999 11.452L3.617 11.9L3.381 11.175L3.999 10.726H3.235L2.999 10L2.764 10.726H2ZM6.382 11.9L6.999 11.452L7.617 11.9L7.381 11.175L7.999 10.726H7.235L6.999 10L6.764 10.726H6L6.618 11.175L6.382 11.9ZM10 10.726L10.618 11.175L10.382 11.9L10.999 11.452L11.617 11.9L11.381 11.175L11.999 10.726H11.235L10.999 10L10.764 10.726H10ZM14 10.726L14.618 11.175L14.382 11.9L14.999 11.452L15.617 11.9L15.381 11.175L15.999 10.726H15.235L14.999 10L14.764 10.726H14Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_380_59969">
              <rect width="36" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      activityValue: 65,
      onlyViewValue: 97,
      title: "US",
    },
    {
      svg: (
        <svg
          width="36"
          height="26"
          viewBox="0 0 36 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_380_59983)">
            <path
              d="M0 4.059V8H5.628L0 4.059ZM4.664 26H13V20.163L4.664 26ZM23 20.164V26H31.335L23 20.164ZM0 18V21.941L5.63 18H0ZM31.337 0H23V5.837L31.337 0ZM36 21.942V18H30.369L36 21.942ZM36 8V4.059L30.371 8H36ZM13 0H4.664L13 5.837V0Z"
              fill="#00247D"
            />
            <path
              d="M25.1392 18.0002L34.8512 24.8012C35.3255 24.3126 35.6664 23.7104 35.8412 23.0522L28.6263 18.0002H25.1392ZM12.9993 18.0002H10.8583L1.14725 24.8002C1.66825 25.3302 2.33625 25.7092 3.08525 25.8852L12.9993 18.9432V18.0002ZM22.9993 8.00023H25.1403L34.8512 1.20023C34.3213 0.66251 33.6496 0.286261 32.9142 0.115234L22.9993 7.05723V8.00023ZM10.8583 8.00023L1.14725 1.20023C0.673203 1.68921 0.332065 2.29128 0.15625 2.94923L7.37125 8.00023H10.8583Z"
              fill="#CF1B2B"
            />
            <path
              d="M36 16H21V26H23V20.164L31.335 26H32C32.5313 26.0001 33.0572 25.8941 33.5469 25.6882C34.0367 25.4823 34.4804 25.1807 34.852 24.801L25.14 18H28.627L35.842 23.052C35.935 22.715 36 22.366 36 22V21.942L30.369 18H36V16ZM0 16V18H5.63L0 21.941V22C0 23.091 0.439 24.078 1.148 24.8L10.859 18H13V18.943L3.086 25.884C3.38 25.954 3.684 26 4 26H4.664L13 20.163V26H15V16H0ZM36 4C36.0006 2.95198 35.5881 1.94595 34.852 1.2L25.141 8H23V7.057L32.915 0.115C32.6155 0.0415274 32.3084 0.00293805 32 3.78378e-07H31.337L23 5.837V3.78378e-07H21V10H36V8H30.371L36 4.059V4ZM13 3.78378e-07V5.837L4.664 3.78378e-07H4C3.46862 -0.000231172 2.94257 0.105813 2.45278 0.311895C1.96299 0.517977 1.51936 0.819934 1.148 1.2L10.859 8H7.372L0.157 2.949C0.0577802 3.29071 0.00497341 3.64421 0 4L0 4.059L5.628 8H0V10H15V3.78378e-07H13Z"
              fill="#EEEEEE"
            />
            <path
              d="M21 10V0H15V10H0V16H15V26H21V16H36V10H21Z"
              fill="#CF1B2B"
            />
          </g>
          <defs>
            <clipPath id="clip0_380_59983">
              <rect width="36" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      activityValue: 42,
      onlyViewValue: 84,
      title: "UK",
    },
    {
      svg: (
        <svg
          width="36"
          height="26"
          viewBox="0 0 36 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_380_59997)">
            <path
              d="M0 22C0 23.0609 0.421427 24.0783 1.17157 24.8284C1.92172 25.5786 2.93913 26 4 26H32C33.0609 26 34.0783 25.5786 34.8284 24.8284C35.5786 24.0783 36 23.0609 36 22V18H0V22Z"
              fill="#FFCD05"
            />
            <path d="M0 9H36V18H0V9Z" fill="#ED1F24" />
            <path
              d="M32 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 9H36V4C36 2.93913 35.5786 1.92172 34.8284 1.17157C34.0783 0.421427 33.0609 0 32 0Z"
              fill="#141414"
            />
          </g>
          <defs>
            <clipPath id="clip0_380_59997">
              <rect width="36" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      activityValue: 38,
      onlyViewValue: 91,
      title: "German",
    },
    {
      svg: (
        <svg
          width="36"
          height="26"
          viewBox="0 0 36 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_380_60009)">
            <path
              d="M36 22C36 23.0609 35.5786 24.0783 34.8284 24.8284C34.0783 25.5786 33.0609 26 32 26H24V0H32C33.0609 0 34.0783 0.421427 34.8284 1.17157C35.5786 1.92172 36 2.93913 36 4V22Z"
              fill="#ED2939"
            />
            <path
              d="M4 0C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 22C0 23.0609 0.421427 24.0783 1.17157 24.8284C1.92172 25.5786 2.93913 26 4 26H12V0H4Z"
              fill="#002495"
            />
            <path d="M12 0H24V26H12V0Z" fill="#EEEEEE" />
          </g>
          <defs>
            <clipPath id="clip0_380_60009">
              <rect width="36" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      activityValue: 64,
      onlyViewValue: 78,
      title: "France",
    },
    {
      svg: (
        <svg
          width="36"
          height="26"
          viewBox="0 0 36 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_380_60021)">
            <path
              d="M32 0H4C3.795 0 3.593 0.0150001 3.396 0.0450001L3.392 1.799L0.662004 1.795C0.229151 2.44884 -0.00113204 3.21587 4.18442e-06 4V22C4.18442e-06 23.0609 0.421432 24.0783 1.17158 24.8284C1.92172 25.5786 2.93914 26 4 26H32C33.0609 26 34.0783 25.5786 34.8284 24.8284C35.5786 24.0783 36 23.0609 36 22V4C36 2.93913 35.5786 1.92172 34.8284 1.17157C34.0783 0.421427 33.0609 0 32 0Z"
              fill="#00247D"
            />
            <path
              d="M8.99991 21.0229L7.77791 22.1519L7.89891 20.4919L6.25391 20.2409L7.62691 19.3009L6.79791 17.8579L8.38891 18.3459L8.99991 16.7969L9.61191 18.3459L11.2029 17.8579L10.3729 19.3009L11.7469 20.2409L10.1019 20.4919L10.2229 22.1519L8.99991 21.0229ZM27.9499 4.56188L27.1509 5.29988L27.2299 4.21387L26.1529 4.04988L27.0519 3.43488L26.5099 2.49088L27.5499 2.80988L27.9499 1.79688L28.3509 2.80988L29.3919 2.49088L28.8489 3.43488L29.7469 4.04988L28.6709 4.21387L28.7499 5.29988L27.9499 4.56188ZM23.9499 10.5619L23.1509 11.3009L23.2299 10.2149L22.1529 10.0509L23.0519 9.43488L22.5099 8.49088L23.5499 8.80988L23.9499 7.79688L24.3509 8.80988L25.3919 8.49088L24.8489 9.43488L25.7469 10.0509L24.6709 10.2149L24.7499 11.3009L23.9499 10.5619ZM32.9499 8.56188L32.1509 9.30087L32.2299 8.21488L31.1529 8.05087L32.0519 7.43488L31.5099 6.49088L32.5499 6.80988L32.9499 5.79688L33.3509 6.80988L34.3919 6.49088L33.8489 7.43488L34.7469 8.05087L33.6709 8.21488L33.7499 9.30087L32.9499 8.56188ZM27.9499 22.5619L27.1509 23.3009L27.2299 22.2149L26.1529 22.0509L27.0519 21.4349L26.5099 20.4909L27.5499 20.8099L27.9499 19.7969L28.3509 20.8099L29.3919 20.4909L28.8489 21.4349L29.7469 22.0509L28.6709 22.2149L28.7499 23.3009L27.9499 22.5619ZM30.9999 10.9999L31.2939 11.5959L31.9509 11.6909L31.4759 12.1539L31.5879 12.8089L30.9999 12.4999L30.4119 12.8089L30.5239 12.1539L30.0489 11.6909L30.7059 11.5959L30.9999 10.9999Z"
              fill="white"
            />
            <path
              d="M19 13V0H4C3.68 0 3.396 0.0450001 3.396 0.0450001L3.392 1.799L0.662003 1.795C0.662003 1.795 0.620003 1.854 0.535003 2C0.183716 2.60795 -0.000836445 3.29786 2.84992e-06 4V13H19Z"
              fill="#00247D"
            />
            <path
              d="M19 0H16.669L12 3.269V0H7V2.569L3.396 0.0450001C2.79485 0.134799 2.22261 0.362395 1.724 0.71L6.426 4H4.69L0.967 1.391C0.857207 1.51933 0.755351 1.65425 0.662 1.795L3.813 4H0V9H3.885L0 11.766V13H3.332L7 10.432V13H12V9.731L16.668 13H19V10.971L16.185 9H19V4H16.186L19 2.029V0Z"
              fill="#EEEEEE"
            />
            <path d="M11 0H8V5H0V8H8V13H11V8H19V5H11V0Z" fill="#CF1B2B" />
            <path
              d="M19.0004 0H17.5394L12.0004 3.879V4H13.5714L19.0004 0.198V0ZM1.72437 0.71C1.44441 0.904266 1.19007 1.13307 0.967375 1.391L4.69038 4H6.42537L1.72437 0.71ZM6.43737 9L0.734375 13H2.46137L7.00037 9.822V9H6.43737ZM19.0004 12.802V11.582L15.3134 9H13.5704L19.0004 12.802Z"
              fill="#CF1B2B"
            />
          </g>
          <defs>
            <clipPath id="clip0_380_60021">
              <rect width="36" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      activityValue: 18,
      onlyViewValue: 56,
      title: "Australia",
    },
  ];

  return (
    <div className="analytics__item">
      <div className="analytics__item-top analytics__item-top-aifs">
        <div className="analytics__item-title">Country Activity</div>
        <div className="analytics__activities analytics__activities-col">
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
            Activity
          </div>
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
            Only views
          </div>
        </div>
      </div>
      <ul className="analytics__country-list">
        {dataCountriesActivity.map((el, idx) => (
          <CountryActivityItem {...el} key={idx} />
        ))}
      </ul>
    </div>
  );
};
