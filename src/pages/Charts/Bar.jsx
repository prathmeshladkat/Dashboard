import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { BarchartData } from "./LineData";
import { ChartsHeader } from "../../components";

const BarChartComponent = () => {
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
    return BarchartData.filter((item) => {
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
        label: "Value",
        data: filteredData.map((item) => item.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Bar" title="inflation rate" />
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
        <Bar data={chartOptions} />
      </div>
    </div>
  );
};

export default BarChartComponent;
