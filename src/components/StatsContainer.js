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
      icon: <ImPowerCord />,
      color: "#3041db",
      bcg: "#c7e6fc",
    },
    {
      title: "Line Current",
      count: stats.declined || "30 A",
      icon: <FaLightbulb />,
      color: "#3041db",
      bcg: "#c7e6fc",
    },
    {
      title: "Line Frequency",
      count: stats.declined || "60 Hz",
      icon: <FaLightbulb />,
      color: "#3041db",
      bcg: "#c7e6fc",
    },
    {
      title: "Power Factor",
      count: stats.pending || "0.99",
      icon: <ImPower />,
      color: "#3041db",
      bcg: "#c7e6fc",
    },
    {
      title: "Active Energy",
      count: stats.pending || "3 KW",
      icon: <ImPower />,
      color: "#3041db",
      bcg: "#c7e6fc",
    },
    {
      title: "Active Power",
      count: stats.pending || "10 KWh",
      icon: <ImPower />,
      color: "#3041db",
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
