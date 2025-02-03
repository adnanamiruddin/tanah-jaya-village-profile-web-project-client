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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function EnvironmentDiagramChart() {
  const chartData = {
    labels: ["Jalaya", "Kassi", "Daloba", "Barang", "Na'nasaya"],
    datasets: [
      {
        label: "Penduduk Laki-laki",
        data: [100, 200, 300, 400, 500],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Penduduk Perempuan",
        data: [500, 400, 300, 200, 100],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
