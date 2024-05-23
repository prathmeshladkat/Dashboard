import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import { LinechartData } from "./LineData";
import { ChartsHeader } from "../../components";

const LineChart = () => {
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
    return LinechartData.filter((item) => {
      return item.name.toLowerCase().includes(filter.searchTerm.toLowerCase());
    }).sort((a, b) => {
      if (filter.sortOption === "ascending") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

  const filteredData = sortAndFilterData();

  const chartOptions = {
    labels: filteredData.map((item) => item.name),
    datasets: [
      {
        label: "My First Dataset",
        data: filteredData.map((item) => item.value),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Line" title="Company Perfomance" />
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

        <Line data={chartOptions} options={{}} />
      </div>
    </div>
  );
};

export default LineChart;
