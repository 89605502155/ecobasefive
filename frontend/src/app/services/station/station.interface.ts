import { IDepth } from "./depth.interface"

export interface IStation {
  name: string
  lat: number
  lon: number
  depths: IDepth[]
}
