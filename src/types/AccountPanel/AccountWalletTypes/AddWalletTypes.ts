export interface ICardEditErrors {
  name: string
  walletaddress: string
  password: string
  email: string
}
export interface INewWalletErrors {
  name: string
  walletaddress: string
  password: string
  email: string
}
export type AddWalletType = {
  setOpenBar: (arg: boolean) => void
};
export type dataHistoryItemCardInfoType = {
  title: string;
  time: string;
  profite: number;
};
export type ItemCardInfoType = {
  item: dataHistoryCardInfoType
}
export type dataHistoryCardInfoType = {
  date: string;
  profite: number;
  items: dataHistoryItemCardInfoType[];
};
export type NewWalletType = {
  setAddedMode: (arg: boolean) => void
  setCards: (arg: boolean) => void
}