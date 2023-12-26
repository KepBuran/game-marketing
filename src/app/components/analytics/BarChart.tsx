"use client"; // This is a client component
import { useEffect } from "react"


export default function BarChart() {

  const draw = () => {
   
  }

  const id = 'chart'

  useEffect(() => {draw()}, [id])

  return (
    <div id={id}>

    </div>
  )

}