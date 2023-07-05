

export interface IForgotPanelErrors {
  email: string
}
export interface ILoginPanelErrors {
  email: string
}
export interface IResetPasswordErrors {
  newpassword: string
  repassword: string
  mismatch: string
}
export type ChangedPanelType = {
  isOpenAside: boolean
}
export type ForgotPanelType = {
  isOpenAside: boolean
}
export type LoginPanelType = {
  isOpenAside: boolean
}
export type ResetPasswordType = {
  isOpenAside: boolean
}
export type VerificationPanelType = {
  isOpenAside: boolean
}