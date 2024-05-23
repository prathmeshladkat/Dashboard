import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { generateData } from "./LineData";
import { ChartsHeader } from "../../components";

const PyramidChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [timeRange, setTimeRange] = useState(6); // Default time range of 6 months

  const handleTimeRangeChange = (event) => {
    setTimeRange(parseInt(event.target.value));
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: timeRange }, (_, i) => `Month ${i + 1}`),
        datasets: [
          {
            label: "Male",
            data: generateData(timeRange),
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Female",
            data: generateData(timeRange),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          x: {
            stacked: true,
            beginAtZero: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
          },
        },
      },
    });
  }, [timeRange]);

  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Pyramid" title="Inflation rate" />
        <select
          value={timeRange}
          onChange={handleTimeRangeChange}
          className="block  px-4 py-2 mt-2 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value={3} className="text-gray-700 dark:text-gray-300">
            3 Months
          </option>
          <option value={6} className="text-gray-700 dark:text-gray-300">
            6 Months
          </option>
          <option value={9} className="text-gray-700 dark:text-gray-300">
            9 Months
          </option>
          <option value={12} className="text-gray-700 dark:text-gray-300">
            12 Months
          </option>
        </select>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default PyramidChartComponent;
