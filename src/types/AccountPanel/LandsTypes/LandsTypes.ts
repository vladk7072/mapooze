export interface ILandsErrors {
  checkbox: string;
}
export interface IPriceToSellErrors {
  value: string;
}
export interface IAdverstingsErrors {
  advcheck: string;
}
export interface IForRentErrors {
  start: string;
  end: string;
  rate: string;
}
export type LandsType = {
  setOpenBar: (arg: boolean) => void;
};
export type IPersonalizationErrors = {
  angle: string
}