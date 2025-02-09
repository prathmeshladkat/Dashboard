import React from "react";
import {
  medicalproBranding,
  weeklyStats,
  SparklineAreaData,
} from "./Charts/LineData";
import { IoIosMore } from "react-icons/io";
import { Button, SparkLine } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">Weekly Stats</p>
          <button type="button" className="text-xl font-semibold text-gray-500">
            <IoIosMore />
          </button>
        </div>

        <div className="mt-10 ">
          {weeklyStats.map((item) => (
            <div key={item.title} className="flex justify-between mt-4 w-full">
              <div className="flex gap-4">
                <button
                  type="button"
                  style={{ background: item.iconBg }}
                  className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                >
                  {item.icon}
                </button>
                <div>
                  <p className="text-md font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>

              <p className={`text-${item.pcColor}`}>{item.amount}</p>
            </div>
          ))}
          <div className="mt-4">
            <SparkLine
              currentColor={currentColor}
              id="area-sparkLine"
              height="160px"
              type="Area"
              data={SparklineAreaData}
              width="320"
              color="rgb(242, 252, 253)"
            />
          </div>
        </div>
      </div>

      <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">MedicalPro Branding</p>
          <button type="button" className="text-xl font-semibold text-gray-400">
            <IoIosMore />
          </button>
        </div>
        <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
          16 APR, 2021
        </p>

        <div className="flex gap-4 border-b-1 border-color mt-6">
          {medicalproBranding.data.map((item) => (
            <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
              <p className="text-xs text-gray-400">{item.title}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="border-b-1 border-color pb-4 mt-2">
          <p className="text-md font-semibold mb-2">Teams</p>

          <div className="flex gap-4">
            {medicalproBranding.teams.map((item) => (
              <p
                key={item.name}
                style={{ background: item.color }}
                className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-5 border-t-1 border-color">
          <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          <Button
            color="white"
            bgColor={currentColor}
            text="Add"
            borderRadius="10px"
          />
        </div>
      </div>

      <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">Daily Activities</p>
          <button type="button" className="text-xl font-semibold text-gray-500">
            <IoIosMore />
          </button>
        </div>
        <div className="mt-10">
          <div className="mt-8">
            <p className="font-semibold text-lg">React 19 coming soon!</p>
            <p className="text-gray-400 ">By Prahmesh</p>
            <p className="mt-8 text-sm text-gray-400">
              This will be the small description for the news you have shown
              here. There could be some great info.
            </p>
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Read More"
                borderRadius="10px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
