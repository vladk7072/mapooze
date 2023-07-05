export interface IPersonalPanelErrors {
  tel: string;
  checkbox: string;
}
export interface IRegisterPanelErrors {
  name: string;
  newpassword: string;
  repassword: string;
  mismatch: string;
  email: string;
}
export type PersonalPanelType = {
  isOpenAside: boolean;
};
export type RegisterPanelType = {
  isOpenAside: boolean;
};
export type VerificationRegisterPanelType = {
  isOpenAside: boolean;
};
