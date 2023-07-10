import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useShipStore from "../../store/useShipStore";

export default function Graph() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const { ship, dataKencana, dataFerry } = useShipStore((state) => ({
    ship: state.ship,
    dataKencana: state.dataKencana,
    dataFerry: state.dataFerry,
  }));

  const options = {
    // maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Carbon Intensity Indicator",
      },
    },
    scales: {
      y: {
        max: 75,
      },
    },
  };

  const labels = Array.from(
    { length: dataKencana.length },
    (_, index) => index + 1
  );

  const dataShip = ship === "ferry" ? dataFerry : dataKencana;
  const labelName = ship === "ferry" ? "CII DF8" : "CII DK9";

  const data = {
    labels,
    datasets: [
      {
        label: "E",
        data: Array(dataShip.length).fill(67.42),
        borderColor: "#520000",
        backgroundColor: "#520000",
      },
      {
        label: "D",
        data: Array(dataShip.length).fill(59.127),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "C",
        data: Array(dataShip.length).fill(51.866),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "B",
        data: Array(dataShip.length).fill(47.17),
        borderColor: "yellow",
        backgroundColor: "yellow",
      },
      {
        label: "A",
        data: Array(dataShip.length).fill(39.418),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: labelName,
        data: dataShip,
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
