import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  LineChart,
  PieChart,
  BarChart,
  AreaChart,
  PyramidChart,
  StackedChart,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

import Ecommerce from "./pages/Ecommerce";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              style={{ background: currentColor, borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>

            {themeSettings && <ThemeSettings />}
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/home" element={<Ecommerce />} />
                {/* apps  */}

                {/*charts*/}
                <Route path="/line" element={<LineChart />} />
                <Route path="/area" element={<AreaChart />} />
                <Route path="/bar" element={<BarChart />} />
                <Route path="/pie" element={<PieChart />} />
                <Route path="/pyramid" element={<PyramidChart />} />
                <Route path="/stacked" element={<StackedChart />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
