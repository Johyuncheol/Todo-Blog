export const optionData = {
  chart: {
    height: 350,
    type: "bar" as "bar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  colors: ["#00E396"],
  dataLabels: {
    formatter: function (val: any, opt: any) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`;
      }
      return val;
    },
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ["완료", "총 개수"],
    markers: {
      fillColors: ["#00E396", "#775DD0"],
    },
  },
};
