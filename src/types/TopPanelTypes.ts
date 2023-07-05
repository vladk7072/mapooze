export type TopItemType = {
  item: usersDataType
  count: number
};

export type TopPanelType = {
  isOpenAside: boolean;
};
export type usersDataType = {
  like: boolean
  logo: string | null
  place: string
  name: string
  price: string
  proc: string
  eth: string
};
