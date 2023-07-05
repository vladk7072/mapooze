
export interface IDetailsErrors {
  age: string
  name: string
  username: string
  curpassword: string
  newpassword: string
  mismatch: string
  email: string
  picked: string
}
export type DetailsType = {
  setOpenBar: (arg: boolean) => void
}