"use client"; // This is a client component
import { useEffect } from "react"
import Plot from 'react-plotly.js';

type Data = {
  x: number[],
  y: number[],
  type: string,
  mode?: string,
  marker?: {color: string},
  name?: string
  title?: string
}

interface Props {
  data: Data[]
  layout: {width: number, height: number, title: string}


}

export default function BarChart({data, layout}: Props) {
  console.log("BarChart", data, layout)

  return (
    <Plot
        data={data}
        layout={layout}
        config={{scrollZoom: false, editable: false, displayModeBar: false, staticPlot: true}}
      />
  )

}