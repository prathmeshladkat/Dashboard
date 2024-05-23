import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiPieChart, FiShoppingBag, FiStar } from "react-icons/fi";
import { GiLouvrePyramid } from "react-icons/gi";
import { ImSad } from "react-icons/im";

export const LinechartData = [
  { name: "Sales", value: 120 },
  { name: "Website Traffic", value: 90 },
  { name: "Customer Satisfaction", value: 85 },
  { name: "Productivity", value: 110 },
  { name: "Revenue Growth", value: 130 },
  { name: "User Engagement", value: 95 },
  { name: "Market Share", value: 75 },
  { name: "Profit Margin", value: 100 },
  { name: "Employee Satisfaction", value: 80 },
  { name: "Customer Retention", value: 70 },
];

export const AreachartData = [
  {
    date: "2022-01-01",
    value: 100,
  },
  {
    date: "2022-01-05",
    value: 150,
  },
  {
    date: "2022-02-15",
    value: 120,
  },
  {
    date: "2022-03-20",
    value: 180,
  },
  {
    date: "2022-05-01",
    value: 90,
  },
  {
    date: "2022-06-10",
    value: 200,
  },
  {
    date: "2022-08-01",
    value: 160,
  },
  {
    date: "2022-11-15",
    value: 230,
  },
];

export const BarchartData = [
  { name: "Category A", value: 50 },
  { name: "Category B", value: 30 },
  { name: "Category C", value: 40 },
  { name: "Category D", value: 60 },
  { name: "Category E", value: 20 },
  { name: "Category F", value: 70 },
];

export const chartData = [
  { name: "Category 1", value: 25 },
  { name: "Category 2", value: 20 },
  { name: "Category 3", value: 15 },
  { name: "Category 4", value: 10 },
  { name: "Category 5", value: 30 },
];

export const PiechartData = [
  {
    name: "Milk",
    value: 35,
  },
  {
    name: "Cheese",
    value: 25,
  },
  {
    name: "Yogurt",
    value: 15,
  },
  {
    name: "Ice Cream",
    value: 10,
  },
  {
    name: "Butter",
    value: 15,
  },
];

export const generateData = (timeRange) => {
  const data = [];
  for (let i = 0; i < timeRange; i++) {
    data.push(Math.floor(Math.random() * 30) + 10); // Random data for demonstration
  }
  return data;
};

export const StackedchartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Excellent",
      backgroundColor: "rgba(54, 162, 235, 0.7)",
      data: [21, 19, 24, 20, 15, 17, 22, 25, 18, 23, 19, 20],
      stack: "Stack 0",
    },
    {
      label: "Good performance",
      backgroundColor: "rgba(75, 192, 192, 0.7)",
      data: [14, 12, 10, 16, 9, 7, 11, 13, 15, 10, 12, 14],
      stack: "Stack 0",
    },
    {
      label: "Bad performance",
      backgroundColor: "rgba(255, 99, 132, 0.7)",
      data: [2, 1, 3, 4, 1, 5, 4, 3, 2, 4, 5, 2],
      stack: "Stack 1",
    },
  ],
};

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Home",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },

      {
        name: "pyramid",
        icon: <GiLouvrePyramid />,
      },
      {
        name: "stacked",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const weeklyStats = [
  {
    icon: <ImSad />,
    amount: "-$560",
    title: "Least seller",
    desc: "Johnathan ",
    iconBg: "#FB9678",
    pcColor: "red-600",
  },
  {
    icon: <FiStar />,
    amount: "+$560",
    title: "Best Seller",
    desc: "MaterialPro Admin",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "red-600",
  },
  {
    icon: <BsChatLeft />,
    amount: "+$260",
    title: "Most Commented",
    desc: "george Admin",
    iconBg: "#00C292",
    pcColor: "green-600",
  },
];

export const medicalproBranding = {
  data: [
    {
      title: "Due Date",
      desc: "Oct 23, 2021",
    },
    {
      title: "Budget",
      desc: "$98,500",
    },
    {
      title: "Expense",
      desc: "$63,000",
    },
  ],
  teams: [
    {
      name: "Bootstrap",
      color: "orange",
    },
    {
      name: "Angular",
      color: "#FB9678",
    },
  ],
};

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];
