import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { StackedchartData } from "./LineData";
import { ChartsHeader } from "../../components";

const StackedBarChartComponent = () => {
  const [monthsToShow, setMonthsToShow] = useState(12);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Stacked Bar Chart",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const handleFilterChange = (months) => {
    setMonthsToShow(months);
  };

  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Stacked" title="Inflation rate" />
        <select
          onChange={(e) => handleFilterChange(parseInt(e.target.value))}
          className="block  px-4 py-2 mt-2 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value={3}>Last 3 Months</option>
          <option value={6}>Last 6 Months</option>
          <option value={12}>Last 12 Months</option>
        </select>
        <Bar
          data={{
            ...StackedchartData,
            labels: StackedchartData.labels.slice(-monthsToShow),
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default StackedBarChartComponent;
