import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import { FaLightbulb } from "react-icons/fa";
import { ImPower, ImPowerCord } from "react-icons/im";
import Wrapper from "../assets/wrappers/StatsContainer";
const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "Line Voltage",
      count: stats.interview || "220 VAC",
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Line Current",
      count: stats.declined || "30 A",
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Line Frequency",
      count: stats.declined || "60 Hz",
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Power Factor",
      count: stats.pending || "0.99",
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Active Energy",
      count: stats.pending || "3 KW",
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Active Power",
      count: stats.pending || "10 KWh",
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
