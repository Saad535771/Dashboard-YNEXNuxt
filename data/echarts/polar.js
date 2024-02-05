const data = [];

for (let i = 0; i <= 360; i++) {
  const t = (i / 180) * Math.PI;
  const r = Math.sin(2 * t) * Math.cos(2 * t);
  data.push([r, i]);
}

export default function getData() {
  return {
    backgroundColor : 'transparent',
    textStyle: {
      fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
      fontWeight: 300
    },
    title: {
      text: "Dual Numeric Axis"
    },
    legend: {
      data: ["line"]
    },
    polar: {
      center: ["50%", "54%"]
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross"
      }
    },
    angleAxis: {
      type: "value",
      startAngle: 0
    },
    radiusAxis: {
      min: 0
    },
    series: [
      {
        coordinateSystem: "polar",
        name: "line",
        type: "line",
        showSymbol: false,
        data: data
      }
    ],
    animationDuration: 2000
  };
}