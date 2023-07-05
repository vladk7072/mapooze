

export type saleDataType = {
  id: number
  land: string
  landOwnerName: string
  landOwnerLogo: string
  status: string
  price: number
  favorite: boolean
  change: string
}
export type SalePanelType = {
  isOpenAside: boolean
} 
export type SalePanelItemType = {
  item: saleDataType
  count: number
} 
export type SalePlaceType = {
  isOpenAside: boolean
} 