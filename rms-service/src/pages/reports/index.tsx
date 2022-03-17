import type { NextPage } from 'next'
import React, { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'





import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);


import Bar from '../../components/reports/charts/Bar'
import Bubble from '../../components/reports/charts/Bubble'
import CrazyLine from '../../components/reports/charts/CrazyLine'
import DoughNut from '../../components/reports/charts/DoughNut'
import DynamicDoughnut from '../../components/reports/charts/DynamicDoughnut'
import Pie from '../../components/reports/charts/Pie'
import Line from '../../components/reports/charts/Line'
import Polar from '../../components/reports/charts/Polar'
import Radar from '../../components/reports/charts/Radar'
import Scatter from '../../components/reports/charts/Scatter'

const Reports: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reports Management</title>
        <meta name="description" content="Reports Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="flex flex-col w-full md:space-y-4">
        <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
          <div className="grid grid-cols-2 gap-y-24">
            <Bar />
            <Bubble />
            <CrazyLine />
            <DoughNut />
            <DynamicDoughnut />
            <Pie />
            <Line />
            <Polar />
            <Radar />
            <Scatter />
          </div>
          <div className="w-full h-[500px] flex justify-center flex-col ">
            <div className="w-32 h-32 mx-auto">
              <Image src="/images/report.png" width={100} height={100} layout="responsive" alt="" />
            </div>
            <div className="mx-auto text-center">
              <p className="">Once you start selling, you'll see reports here.</p>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Reports