import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import logo1 from "../../assets/images/toppanel/1.jpg";
import logo2 from "../../assets/images/toppanel/2.jpg";
import logo3 from "../../assets/images/toppanel/3.jpg";
import logo4 from "../../assets/images/toppanel/4.jpg";
import logo5 from "../../assets/images/toppanel/5.jpg";

type topDataType = {
  like: boolean;
  logo: string | null;
  place: string;
  name: string;
  price: string;
  proc: string;
  eth: string;
};
type initialStateType = {
  topData: topDataType[];
};

const initialState: initialStateType = {
  topData: [
    {
      like: false,
      logo: logo1,
      place: "UK, Oxford",
      name: "Jack Brown",
      price: "354 ETH",
      proc: "+12,05%",
      eth: "254 ETH",
    },
    {
      like: true,
      logo: logo2,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: null,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo3,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: null,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo4,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo5,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "+3,05%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo1,
      place: "UK, Oxford",
      name: "Jack Brown",
      price: "354 ETH",
      proc: "+12,05%",
      eth: "254 ETH",
    },
    {
      like: true,
      logo: logo2,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: null,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo3,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: null,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo4,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo5,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "+3,05%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo1,
      place: "UK, Oxford",
      name: "Jack Brown",
      price: "354 ETH",
      proc: "+12,05%",
      eth: "254 ETH",
    },
    {
      like: true,
      logo: logo2,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: null,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo3,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: null,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo4,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo5,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "+3,05%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo1,
      place: "UK, Oxford",
      name: "Jack Brown",
      price: "354 ETH",
      proc: "+12,05%",
      eth: "254 ETH",
    },
    {
      like: true,
      logo: logo2,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: null,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo3,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: null,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo4,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "-2,1%",
      eth: "254 ETH",
    },
    {
      like: false,
      logo: logo5,
      place: "US, Arlington, DC",
      name: "Merry Sting",
      price: "297 ETH",
      proc: "+3,05%",
      eth: "254 ETH",
    },
  ] as topDataType[],
};

export const topPanelSlice = createSlice({
  name: "topPanelSlice",
  initialState,
  reducers: {},
});

export const { reducer, actions } = topPanelSlice;
