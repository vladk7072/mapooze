export type ChatAsideType = {
  isOpenAside: boolean
};
export type ChatMainType = {
  isOpenAside: boolean
  setOpenAside: (arg: boolean) => void
};
export type ChatProfileAsideType = {
  isOpenAside: boolean
  setMyProfile: (arg: boolean) => void
}