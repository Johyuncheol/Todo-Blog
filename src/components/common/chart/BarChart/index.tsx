"use client";
import React, { useState } from "react";
import { optionData } from "./data/options";
import { chartData } from "./data/data";
import styles from "./index.module.css";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  const [series] = useState(chartData);

  const [options] = useState(optionData);
  return (
    <div className={styles.barchart}>
      <span>달성 현황 </span>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={options.chart.height}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
