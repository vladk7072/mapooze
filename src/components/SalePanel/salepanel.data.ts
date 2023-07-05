import { saleDataType } from "../../types/SalePanelTypes";
//@ts-ignore
import logoPerson from "../../assets/images/salepanel/logo.jpg";
//@ts-ignore
import marker1 from "../../assets/images/salepanel/marker1.png";
//@ts-ignore
import marker2 from "../../assets/images/salepanel/marker2.png";
//@ts-ignore
import marker3 from "../../assets/images/salepanel/marker3.png";
//@ts-ignore
import marker4 from "../../assets/images/salepanel/marker4.png";
//@ts-ignore
import marker5 from "../../assets/images/salepanel/marker5.png";
//@ts-ignore
import marker6 from "../../assets/images/salepanel/marker6.png";
export const saleData = [
  {
    id: 0,
    land: "Germany, Berlin",
    landOwnerName: "Jack Brown",
    landOwnerLogo: logoPerson,
    status: "Free",
    price: 124,
    favorite: false,
    change: "-0.7",
  },
  {
    id: 1,
    land: "Germany, Berlin",
    landOwnerName: null,
    landOwnerLogo: null,
    status: "Free",
    price: 294,
    favorite: false,
    change: "+2.7",
  },
  {
    id: 2,
    land: "France, Marseille, Provence-Alpes-Côte d'Azur, Berlin",
    landOwnerName: null,
    landOwnerLogo: null,
    status: "In Rent",
    price: 478,
    favorite: false,
    change: "-0.7",
  },
  {
    id: 3,
    land: "Germany, Berlin",
    landOwnerName: "Jack Brown",
    landOwnerLogo: logoPerson,
    status: "Submitted for Auction",
    price: 365,
    favorite: false,
    change: "-0.7",
  },
  {
    id: 4,
    land: "Germany, Berlin",
    landOwnerName: "Jack Brown",
    landOwnerLogo: logoPerson,
    status: "Free",
    price: 987,
    favorite: false,
    change: "+2.7",
  },
  {
    id: 5,
    land: "Germany, Berlin",
    landOwnerName: null,
    landOwnerLogo: null,
    status: "For Rent",
    price: 475,
    favorite: false,
    change: "+2.7",
  },
  {
    id: 6,
    land: "France, Marseille, Provence-Alpes-Côte d'Azur, Berlin",
    landOwnerName: "Jack Brown",
    landOwnerLogo: logoPerson,
    status: "Submitted for Exchange",
    price: 197,
    favorite: false,
    change: "-0.7",
  },
  {
    id: 7,
    land: "Germany, Berlin",
    landOwnerName: "Jack Brown",
    landOwnerLogo: logoPerson,
    status: "Free",
    price: 487,
    favorite: false,
    change: "+2.7",
  },
  {
    id: 8,
    land: "Germany, Berlin",
    landOwnerName: "Jack Brown",
    landOwnerLogo: logoPerson,
    status: "Free",
    price: 317,
    favorite: false,
    change: "+2.7",
  },
  {
    id: 9,
    land: "Germany, Berlin",
    landOwnerName: "Jack Brown",
    landOwnerLogo: logoPerson,
    status: "Free",
    price: 947,
    favorite: false,
    change: "+2.7",
  },
] as saleDataType[];

export type selectDataType = {
  id: number;
  title: string;
};
export const statusData = [
  {
    id: 0,
    title: "",
    img: "",
  },
  {
    id: 1,
    title: "Free without owner",
    img: marker1,
  },
  {
    id: 2,
    title: "Free for buying",
    img: marker2,
  },
  {
    id: 3,
    title: "In Rent",
    img: marker3,
  },
  {
    id: 4,
    title: "Submitted for Auction",
    img: marker4,
  },
  {
    id: 5,
    title: "For Rent",
    img: marker5,
  },
  {
    id: 6,
    title: "Submitted for Exchange",
    img: marker6,
  },
];

export const regionsData = [
  {
    id: 0,
    title: "",
  },
  {
    id: 1,
    title: "Africa",
  },
  {
    id: 2,
    title: "Asia",
  },
  {
    id: 3,
    title: "Europe",
  },
  {
    id: 4,
    title: "North America",
  },
  {
    id: 5,
    title: "South America",
  },
  {
    id: 6,
    title: "Oceania",
  },
] as selectDataType[];

export const countriesData = [
  {
    id: 0,
    countries: [],
  },
  {
    id: 1,
    countries: [
      {
        id: 0,
        title: "",
      },
      {
        id: 1,
        title: "Algeria",
      },
      {
        id: 2,
        title: "Angola",
      },
      {
        id: 3,
        title: "Benin",
      },
      {
        id: 4,
        title: "Botswana",
      },
      {
        id: 5,
        title: "Burkina Faso",
      },
      {
        id: 6,
        title: "Burundi",
      },
      {
        id: 7,
        title: "Cape Verde",
      },
      {
        id: 8,
        title: "Cameroon",
      },
      {
        id: 9,
        title: "Central African Republic",
      },
      {
        id: 10,
        title: "Chad",
      },
      {
        id: 11,
        title: "Comoros",
      },
      {
        id: 12,
        title: "Democratic Republic of the Congo",
      },
      {
        id: 13,
        title: "Republic of the Congo",
      },
      {
        id: 14,
        title: "Djibouti",
      },
      {
        id: 15,
        title: "Egypt",
      },
      {
        id: 16,
        title: "Equatorial Guinea",
      },
      {
        id: 17,
        title: "Eritrea",
      },
      {
        id: 18,
        title: "Eswatini",
      },
      {
        id: 19,
        title: "Ethiopia",
      },
      {
        id: 20,
        title: "Gabon",
      },
      {
        id: 21,
        title: "Gambia",
      },
      {
        id: 22,
        title: "Ghana",
      },
      {
        id: 23,
        title: "Guinea",
      },
      {
        id: 24,
        title: "Guinea-Bissau",
      },
      {
        id: 25,
        title: "Kenya",
      },
      {
        id: 26,
        title: "Lesotho",
      },
      {
        id: 27,
        title: "Liberia",
      },
      {
        id: 28,
        title: "Libya",
      },
      {
        id: 29,
        title: "Madagascar",
      },
      {
        id: 30,
        title: "Malawi",
      },
      {
        id: 31,
        title: "Mali",
      },
      {
        id: 32,
        title: "Mauritania",
      },
      {
        id: 33,
        title: "Mauritius",
      },
      {
        id: 34,
        title: "Morocco",
      },
      {
        id: 35,
        title: "Mozambique",
      },
      {
        id: 36,
        title: "Namibia",
      },
      {
        id: 37,
        title: "Niger",
      },
      {
        id: 38,
        title: "Nigeria",
      },
      {
        id: 39,
        title: "Rwanda",
      },
      {
        id: 40,
        title: "Sao Tome and Principe",
      },
      {
        id: 41,
        title: "Senegal",
      },
      {
        id: 42,
        title: "Seychelles",
      },
      {
        id: 43,
        title: "Sierra Leone",
      },
      {
        id: 44,
        title: "Somalia",
      },
      {
        id: 45,
        title: "South Africa",
      },
      {
        id: 46,
        title: "South Sudan",
      },
      {
        id: 47,
        title: "Sudan",
      },
      {
        id: 48,
        title: "Tanzania",
      },
      {
        id: 49,
        title: "Togo",
      },
      {
        id: 50,
        title: "Tunisia",
      },
      {
        id: 51,
        title: "Uganda",
      },
      {
        id: 52,
        title: "Zambia",
      },
      {
        id: 53,
        title: "Zimbabwe",
      },
    ],
  },
  {
    id: 2,
    countries: [
      {
        id: 0,
        title: "",
      },
      {
        id: 1,
        title: "Afghanistan",
      },
      {
        id: 2,
        title: "Armenia",
      },
      {
        id: 3,
        title: "Azerbaijan",
      },
      {
        id: 4,
        title: "Bahrain",
      },
      {
        id: 5,
        title: "Bangladesh",
      },
      {
        id: 6,
        title: "Bhutan",
      },
      {
        id: 7,
        title: "Cambodia",
      },
      {
        id: 8,
        title: "China",
      },
      {
        id: 9,
        title: "Cyprus",
      },
      {
        id: 10,
        title: "East Timor",
      },
      {
        id: 11,
        title: "Georgia",
      },
      {
        id: 12,
        title: "India",
      },
      {
        id: 13,
        title: "Indonesia",
      },
      {
        id: 14,
        title: "Iran",
      },
      {
        id: 15,
        title: "Iraq",
      },
      {
        id: 16,
        title: "Israel",
      },
      {
        id: 17,
        title: "Japan",
      },
      {
        id: 18,
        title: "Jordan",
      },
      {
        id: 19,
        title: "Kazakhstan",
      },
      {
        id: 20,
        title: "Kuwait",
      },
      {
        id: 21,
        title: "Kyrgyzstan",
      },
      {
        id: 22,
        title: "Laos",
      },
      {
        id: 23,
        title: "Lebanon",
      },
      {
        id: 24,
        title: "Malaysia",
      },
      {
        id: 25,
        title: "Maldives",
      },
      {
        id: 26,
        title: "Mongolia",
      },
      {
        id: 27,
        title: "Myanmar (Burma)",
      },
      {
        id: 28,
        title: "Nepal",
      },
      {
        id: 29,
        title: "Oman",
      },
      {
        id: 30,
        title: "Pakistan",
      },
      {
        id: 31,
        title: "Philippines",
      },
      {
        id: 32,
        title: "Qatar",
      },
      {
        id: 33,
        title: "Russia",
      },
      {
        id: 34,
        title: "Saudi Arabia",
      },
      {
        id: 35,
        title: "Singapore",
      },
      {
        id: 36,
        title: "South Korea",
      },
      {
        id: 37,
        title: "Sri Lanka",
      },
      {
        id: 38,
        title: "Syria",
      },
      {
        id: 39,
        title: "Tajikistan",
      },
      {
        id: 40,
        title: "Thailand",
      },
      {
        id: 41,
        title: "Turkmenistan",
      },
      {
        id: 42,
        title: "United Arab Emirates",
      },
      {
        id: 43,
        title: "Uzbekistan",
      },
      {
        id: 44,
        title: "Vietnam",
      },
      {
        id: 45,
        title: "Yemen",
      },
    ],
  },
  {
    id: 3,
    countries: [
      {
        id: 0,
        title: "",
      },
      {
        id: 1,
        title: "Albania",
      },
      {
        id: 2,
        title: "Andorra",
      },
      {
        id: 3,
        title: "Austria",
      },
      {
        id: 4,
        title: "Belarus",
      },
      {
        id: 5,
        title: "Belgium",
      },
      {
        id: 6,
        title: "Bosnia and Herzegovina",
      },
      {
        id: 7,
        title: "Bulgaria",
      },
      {
        id: 8,
        title: "Croatia",
      },
      {
        id: 9,
        title: "Cyprus",
      },
      {
        id: 10,
        title: "Czech Republic",
      },
      {
        id: 11,
        title: "Denmark",
      },
      {
        id: 12,
        title: "Estonia",
      },
      {
        id: 13,
        title: "Finland",
      },
      {
        id: 14,
        title: "France",
      },
      {
        id: 15,
        title: "Germany",
      },
      {
        id: 16,
        title: "Greece",
      },
      {
        id: 17,
        title: "Hungary",
      },
      {
        id: 18,
        title: "Iceland",
      },
      {
        id: 19,
        title: "Ireland",
      },
      {
        id: 20,
        title: "Italy",
      },
      {
        id: 21,
        title: "Kosovo",
      },
      {
        id: 22,
        title: "Latvia",
      },
      {
        id: 23,
        title: "Lithuania",
      },
      {
        id: 24,
        title: "Liechtenstein",
      },
      {
        id: 25,
        title: "Luxembourg",
      },
      {
        id: 26,
        title: "North Macedonia",
      },
      {
        id: 27,
        title: "Malta",
      },
      {
        id: 28,
        title: "Moldova",
      },
      {
        id: 29,
        title: "Monaco",
      },
      {
        id: 30,
        title: "Montenegro",
      },
      {
        id: 31,
        title: "Netherlands",
      },
      {
        id: 32,
        title: "Norway",
      },
      {
        id: 33,
        title: "Poland",
      },
      {
        id: 34,
        title: "Portugal",
      },
      {
        id: 35,
        title: "Romania",
      },
      {
        id: 36,
        title: "San Marino",
      },
      {
        id: 37,
        title: "Serbia",
      },
      {
        id: 38,
        title: "Slovakia",
      },
      {
        id: 39,
        title: "Slovenia",
      },
      {
        id: 40,
        title: "Spain",
      },
      {
        id: 41,
        title: "Sweden",
      },
      {
        id: 42,
        title: "Switzerland",
      },
      {
        id: 43,
        title: "Turkey",
      },
      {
        id: 44,
        title: "Ukraine",
      },
      {
        id: 45,
        title: "United Kingdom",
      },
      {
        id: 46,
        title: "Vatican",
      },
    ],
  },
  {
    id: 4,
    countries: [
      {
        id: 0,
        title: "",
      },
      {
        id: 1,
        title: "Antigua and Barbuda",
      },
      {
        id: 2,
        title: "The Bahamas",
      },
      {
        id: 3,
        title: "Barbados",
      },
      {
        id: 4,
        title: "Belize",
      },
      {
        id: 5,
        title: "Canada",
      },
      {
        id: 6,
        title: "Costa Rica",
      },
      {
        id: 7,
        title: "Cuba",
      },
      {
        id: 8,
        title: "Dominica",
      },
      {
        id: 9,
        title: "Dominican Republic",
      },
      {
        id: 10,
        title: "El Salvador",
      },
      {
        id: 11,
        title: "Grenada",
      },
      {
        id: 12,
        title: "Guatemala",
      },
      {
        id: 13,
        title: "Haiti",
      },
      {
        id: 14,
        title: "Honduras",
      },
      {
        id: 15,
        title: "Jamaica",
      },
      {
        id: 16,
        title: "Mexico",
      },
      {
        id: 17,
        title: "Nicaragua",
      },
      {
        id: 18,
        title: "Panama",
      },
      {
        id: 19,
        title: "Saint Kitts and Nevis",
      },
      {
        id: 20,
        title: "Saint Lucia",
      },
      {
        id: 21,
        title: "Saint Vincent and the Grenadines",
      },
      {
        id: 22,
        title: "USA",
      },
      {
        id: 23,
        title: "Trinidad and Tobago",
      },
    ],
  },
  {
    id: 5,
    countries: [
      {
        id: 0,
        title: "",
      },
      {
        id: 1,
        title: "Argentina",
      },
      {
        id: 2,
        title: "Bolivia",
      },
      {
        id: 3,
        title: "Brazil",
      },
      {
        id: 4,
        title: "Chile",
      },
      {
        id: 5,
        title: "Colombia",
      },
      {
        id: 6,
        title: "Ecuador",
      },
      {
        id: 7,
        title: "Guyana",
      },
      {
        id: 8,
        title: "Paraguay",
      },
      {
        id: 9,
        title: "Peru",
      },
      {
        id: 10,
        title: "Suriname",
      },
      {
        id: 11,
        title: "Uruguay",
      },
      {
        id: 12,
        title: "Venezuela",
      },
    ],
  },
  {
    id: 6,
    countries: [
      {
        id: 0,
        title: "",
      },
      {
        id: 1,
        title: "Australia",
      },
      {
        id: 2,
        title: "Fiji",
      },
      {
        id: 3,
        title: "Kiribati",
      },
      {
        id: 4,
        title: "Marshall Islands",
      },
      {
        id: 5,
        title: "Micronesia",
      },
      {
        id: 6,
        title: "Nauru",
      },
      {
        id: 7,
        title: "New Zealand",
      },
      {
        id: 8,
        title: "Palau",
      },
      {
        id: 9,
        title: "Papua New Guinea",
      },
      {
        id: 10,
        title: "Samoa",
      },
      {
        id: 11,
        title: "Solomon Islands",
      },
      {
        id: 12,
        title: "Tonga",
      },
      {
        id: 13,
        title: "Tuvalu",
      },
      {
        id: 14,
        title: "Vanuatu",
      },
    ],
  },
];
export const allCountriesData = [
  {
    id: 0,
    title: "",
  },
  {
    id: 1,
    title: "Algeria",
  },
  {
    id: 2,
    title: "Angola",
  },
  {
    id: 3,
    title: "Benin",
  },
  {
    id: 4,
    title: "Botswana",
  },
  {
    id: 5,
    title: "Burkina Faso",
  },
  {
    id: 6,
    title: "Burundi",
  },
  {
    id: 7,
    title: "Cape Verde",
  },
  {
    id: 8,
    title: "Cameroon",
  },
  {
    id: 9,
    title: "Central African Republic",
  },
  {
    id: 10,
    title: "Chad",
  },
  {
    id: 11,
    title: "Comoros",
  },
  {
    id: 12,
    title: "Democratic Republic of the Congo",
  },
  {
    id: 13,
    title: "Republic of the Congo",
  },
  {
    id: 14,
    title: "Djibouti",
  },
  {
    id: 15,
    title: "Egypt",
  },
  {
    id: 16,
    title: "Equatorial Guinea",
  },
  {
    id: 17,
    title: "Eritrea",
  },
  {
    id: 18,
    title: "Eswatini",
  },
  {
    id: 19,
    title: "Ethiopia",
  },
  {
    id: 20,
    title: "Gabon",
  },
  {
    id: 21,
    title: "Gambia",
  },
  {
    id: 22,
    title: "Ghana",
  },
  {
    id: 23,
    title: "Guinea",
  },
  {
    id: 24,
    title: "Guinea-Bissau",
  },
  {
    id: 25,
    title: "Kenya",
  },
  {
    id: 26,
    title: "Lesotho",
  },
  {
    id: 27,
    title: "Liberia",
  },
  {
    id: 28,
    title: "Libya",
  },
  {
    id: 29,
    title: "Madagascar",
  },
  {
    id: 30,
    title: "Malawi",
  },
  {
    id: 31,
    title: "Mali",
  },
  {
    id: 32,
    title: "Mauritania",
  },
  {
    id: 33,
    title: "Mauritius",
  },
  {
    id: 34,
    title: "Morocco",
  },
  {
    id: 35,
    title: "Mozambique",
  },
  {
    id: 36,
    title: "Namibia",
  },
  {
    id: 37,
    title: "Niger",
  },
  {
    id: 38,
    title: "Nigeria",
  },
  {
    id: 39,
    title: "Rwanda",
  },
  {
    id: 40,
    title: "Sao Tome and Principe",
  },
  {
    id: 41,
    title: "Senegal",
  },
  {
    id: 42,
    title: "Seychelles",
  },
  {
    id: 43,
    title: "Sierra Leone",
  },
  {
    id: 44,
    title: "Somalia",
  },
  {
    id: 45,
    title: "South Africa",
  },
  {
    id: 46,
    title: "South Sudan",
  },
  {
    id: 47,
    title: "Sudan",
  },
  {
    id: 48,
    title: "Tanzania",
  },
  {
    id: 49,
    title: "Togo",
  },
  {
    id: 50,
    title: "Tunisia",
  },
  {
    id: 51,
    title: "Uganda",
  },
  {
    id: 52,
    title: "Zambia",
  },
  {
    id: 53,
    title: "Zimbabwe",
  },
  {
    id: 54,
    title: "Afghanistan",
  },
  {
    id: 55,
    title: "Armenia",
  },
  {
    id: 56,
    title: "Azerbaijan",
  },
  {
    id: 57,
    title: "Bahrain",
  },
  {
    id: 58,
    title: "Bangladesh",
  },
  {
    id: 59,
    title: "Bhutan",
  },
  {
    id: 60,
    title: "Cambodia",
  },
  {
    id: 61,
    title: "China",
  },
  {
    id: 62,
    title: "Cyprus",
  },
  {
    id: 63,
    title: "East Timor",
  },
  {
    id: 64,
    title: "Georgia",
  },
  {
    id: 65,
    title: "India",
  },
  {
    id: 66,
    title: "Indonesia",
  },
  {
    id: 67,
    title: "Iran",
  },
  {
    id: 68,
    title: "Iraq",
  },
  {
    id: 69,
    title: "Israel",
  },
  {
    id: 70,
    title: "Japan",
  },
  {
    id: 71,
    title: "Jordan",
  },
  {
    id: 72,
    title: "Kazakhstan",
  },
  {
    id: 73,
    title: "Kuwait",
  },
  {
    id: 74,
    title: "Kyrgyzstan",
  },
  {
    id: 75,
    title: "Laos",
  },
  {
    id: 76,
    title: "Lebanon",
  },
  {
    id: 77,
    title: "Malaysia",
  },
  {
    id: 78,
    title: "Maldives",
  },
  {
    id: 79,
    title: "Mongolia",
  },
  {
    id: 80,
    title: "Myanmar (Burma)",
  },
  {
    id: 81,
    title: "Nepal",
  },
  {
    id: 82,
    title: "Oman",
  },
  {
    id: 83,
    title: "Pakistan",
  },
  {
    id: 84,
    title: "Philippines",
  },
  {
    id: 85,
    title: "Qatar",
  },
  {
    id: 86,
    title: "Russia",
  },
  {
    id: 87,
    title: "Saudi Arabia",
  },
  {
    id: 88,
    title: "Singapore",
  },
  {
    id: 89,
    title: "South Korea",
  },
  {
    id: 90,
    title: "Sri Lanka",
  },
  {
    id: 91,
    title: "Syria",
  },
  {
    id: 92,
    title: "Tajikistan",
  },
  {
    id: 93,
    title: "Thailand",
  },
  {
    id: 94,
    title: "Turkmenistan",
  },
  {
    id: 95,
    title: "United Arab Emirates",
  },
  {
    id: 96,
    title: "Uzbekistan",
  },
  {
    id: 97,
    title: "Vietnam",
  },
  {
    id: 98,
    title: "Yemen",
  },
  {
    id: 99,
    title: "Albania",
  },
  {
    id: 100,
    title: "Andorra",
  },
  {
    id: 101,
    title: "Austria",
  },
  {
    id: 102,
    title: "Belarus",
  },
  {
    id: 103,
    title: "Belgium",
  },
  {
    id: 104,
    title: "Bosnia and Herzegovina",
  },
  {
    id: 105,
    title: "Bulgaria",
  },
  {
    id: 106,
    title: "Croatia",
  },
  {
    id: 107,
    title: "Cyprus",
  },
  {
    id: 108,
    title: "Czech Republic",
  },
  {
    id: 109,
    title: "Denmark",
  },
  {
    id: 110,
    title: "Estonia",
  },
  {
    id: 111,
    title: "Finland",
  },
  {
    id: 112,
    title: "France",
  },
  {
    id: 113,
    title: "Germany",
  },
  {
    id: 114,
    title: "Greece",
  },
  {
    id: 115,
    title: "Hungary",
  },
  {
    id: 116,
    title: "Iceland",
  },
  {
    id: 117,
    title: "Ireland",
  },
  {
    id: 118,
    title: "Italy",
  },
  {
    id: 119,
    title: "Kosovo",
  },
  {
    id: 120,
    title: "Latvia",
  },
  {
    id: 121,
    title: "Lithuania",
  },
  {
    id: 122,
    title: "Liechtenstein",
  },
  {
    id: 123,
    title: "Luxembourg",
  },
  {
    id: 124,
    title: "North Macedonia",
  },
  {
    id: 125,
    title: "Malta",
  },
  {
    id: 126,
    title: "Moldova",
  },
  {
    id: 127,
    title: "Monaco",
  },
  {
    id: 128,
    title: "Montenegro",
  },
  {
    id: 129,
    title: "Netherlands",
  },
  {
    id: 130,
    title: "Norway",
  },
  {
    id: 131,
    title: "Poland",
  },
  {
    id: 132,
    title: "Portugal",
  },
  {
    id: 133,
    title: "Romania",
  },
  {
    id: 134,
    title: "San Marino",
  },
  {
    id: 135,
    title: "Serbia",
  },
  {
    id: 136,
    title: "Slovakia",
  },
  {
    id: 137,
    title: "Slovenia",
  },
  {
    id: 138,
    title: "Spain",
  },
  {
    id: 139,
    title: "Sweden",
  },
  {
    id: 140,
    title: "Switzerland",
  },
  {
    id: 141,
    title: "Turkey",
  },
  {
    id: 142,
    title: "Ukraine",
  },
  {
    id: 143,
    title: "United Kingdom",
  },
  {
    id: 144,
    title: "Vatican",
  },
  {
    id: 145,
    title: "Antigua and Barbuda",
  },
  {
    id: 146,
    title: "The Bahamas",
  },
  {
    id: 147,
    title: "Barbados",
  },
  {
    id: 148,
    title: "Belize",
  },
  {
    id: 149,
    title: "Canada",
  },
  {
    id: 150,
    title: "Costa Rica",
  },
  {
    id: 151,
    title: "Cuba",
  },
  {
    id: 152,
    title: "Dominica",
  },
  {
    id: 153,
    title: "Dominican Republic",
  },
  {
    id: 154,
    title: "El Salvador",
  },
  {
    id: 155,
    title: "Grenada",
  },
  {
    id: 156,
    title: "Guatemala",
  },
  {
    id: 157,
    title: "Haiti",
  },
  {
    id: 158,
    title: "Honduras",
  },
  {
    id: 159,
    title: "Jamaica",
  },
  {
    id: 160,
    title: "Mexico",
  },
  {
    id: 161,
    title: "Nicaragua",
  },
  {
    id: 162,
    title: "Panama",
  },
  {
    id: 163,
    title: "Saint Kitts and Nevis",
  },
  {
    id: 164,
    title: "Saint Lucia",
  },
  {
    id: 165,
    title: "Saint Vincent and the Grenadines",
  },
  {
    id: 166,
    title: "USA",
  },
  {
    id: 167,
    title: "Trinidad and Tobago",
  },
  {
    id: 168,
    title: "Argentina",
  },
  {
    id: 169,
    title: "Bolivia",
  },
  {
    id: 170,
    title: "Brazil",
  },
  {
    id: 171,
    title: "Chile",
  },
  {
    id: 172,
    title: "Colombia",
  },
  {
    id: 173,
    title: "Ecuador",
  },
  {
    id: 174,
    title: "Guyana",
  },
  {
    id: 175,
    title: "Paraguay",
  },
  {
    id: 176,
    title: "Peru",
  },
  {
    id: 177,
    title: "Suriname",
  },
  {
    id: 178,
    title: "Uruguay",
  },
  {
    id: 179,
    title: "Venezuela",
  },
  {
    id: 180,
    title: "Australia",
  },
  {
    id: 181,
    title: "Fiji",
  },
  {
    id: 182,
    title: "Kiribati",
  },
  {
    id: 183,
    title: "Marshall Islands",
  },
  {
    id: 184,
    title: "Micronesia",
  },
  {
    id: 185,
    title: "Nauru",
  },
  {
    id: 186,
    title: "New Zealand",
  },
  {
    id: 187,
    title: "Palau",
  },
  {
    id: 188,
    title: "Papua New Guinea",
  },
  {
    id: 189,
    title: "Samoa",
  },
  {
    id: 190,
    title: "Solomon Islands",
  },
  {
    id: 191,
    title: "Tonga",
  },
  {
    id: 192,
    title: "Tuvalu",
  },
  {
    id: 193,
    title: "Vanuatu",
  },
];
