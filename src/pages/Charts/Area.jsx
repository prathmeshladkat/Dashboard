import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import { AreachartData } from "./LineData";
import { ChartsHeader } from "../../components";

const AreaChartComponent = () => {
  const [filter, setFilter] = useState({
    searchTerm: "",
    sortOption: "ascending",
  });

  const handleSearchTermChange = (term) => {
    setFilter((prevFilter) => ({ ...prevFilter, searchTerm: term }));
  };

  const handleSortOptionChange = (option) => {
    setFilter((prevFilter) => ({ ...prevFilter, sortOption: option }));
  };

  function sortAndFilterData() {
    return AreachartData.filter((item) => {
      return item.date.toLowerCase().includes(filter.searchTerm.toLowerCase());
    }).sort((a, b) => {
      if (filter.sortOption === "ascending") {
        return a.date.localeCompare(b.date);
      } else {
        return b.date.localeCompare(a.date);
      }
    });
  }

  const filteredData = sortAndFilterData();

  const chartOptions = {
    labels: filteredData.map((item) => item.date),
    datasets: [
      {
        label: "Value",
        data: filteredData.map((item) => item.value),
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Area" title="Inflation rate" />
        <div className="flex  space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={filter.searchTerm}
            onChange={(e) => handleSearchTermChange(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <select
            value={filter.sortOption}
            onChange={(e) => handleSortOptionChange(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <Line data={chartOptions} />
      </div>
    </div>
  );
};

export default AreaChartComponent;
