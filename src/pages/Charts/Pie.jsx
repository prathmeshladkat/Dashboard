import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { PiechartData } from "./LineData";
import { ChartsHeader } from "../../components";

const PieChartComponent = () => {
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
    return PiechartData.filter((item) => {
      return item.name.toLowerCase().includes(filter.searchTerm.toLowerCase());
    }).sort((a, b) => {
      if (filter.sortOption === "ascending") {
        return a.value - b.value;
      } else {
        return b.value - a.value;
      }
    });
  }

  const filteredData = sortAndFilterData();

  const chartOptions = {
    labels: filteredData.map((item) => item.name),
    datasets: [
      {
        data: filteredData.map((item) => item.value),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Pie" title="Percentage of total dairy sales" />
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

        <Pie
          data={chartOptions}
          options={{
            plugins: { title: { display: true, text: "Pie Chart" } },
            cutout: "40%", // Inner radius of 40%
            radius: "70%", // Outer radius of 70%
          }}
        />
      </div>
    </div>
  );
};

export default PieChartComponent;
