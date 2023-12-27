export interface PlotData {
  x: number[] | string[],
  y: number[],
  type: string,
  mode?: string,
  marker?: {color: string},
  name?: string
  title?: string
}
