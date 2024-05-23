import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  const chartData = {
    labels: data.map((item) => item.x),
    datasets: [
      {
        data: data.map((item) => item.yval),
        backgroundColor: color,
        borderColor: currentColor,
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) => {
            return `${context.parsed.x} : data ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div id={id} style={{ height, width }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default SparkLine;
