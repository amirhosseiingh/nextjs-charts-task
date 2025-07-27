"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { User } from "@/app/type/type";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface UserChartProps {
  users: User[];
}

export default function UserChart({ users }: UserChartProps) {
  const chartData = {
    labels: users.map((user) => user.name),
    datasets: [
      {
        label: "User ID",
        data: users.map((user) => user.id),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Bar Chart of User IDs",
      },
    },
  };

  return <Bar options={chartOptions} data={chartData} />;
}
