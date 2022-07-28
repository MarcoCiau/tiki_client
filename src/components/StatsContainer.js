import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import { FaLightbulb } from "react-icons/fa";
import { ImPower, ImPowerCord } from "react-icons/im";
import Wrapper from "../assets/wrappers/StatsContainer";
const StatsContainer = () => {
  const { stats } = useAppContext();
  const { lineVoltage=0.00, lineCurrent=0.00, frequency=0.00, pf=0.00, energy=0.00, power=0.00 } = stats;
  const defaultStats = [
    {
      title: "Line Voltage",
      count: `${Math.round(lineVoltage * 100) / 100} VAC`,
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Line Current",
      count: `${Math.round(lineCurrent * 100) / 100} A`,
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Line Frequency",
      
      count: `${Math.round(frequency * 100) / 100} Hz`,
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Power Factor",
      count: `${Math.round(pf * 100) / 100}`,
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Active Energy",
      count: `${Math.round(energy * 100) / 100} KWh`,
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Active Power",
      count: `${Math.round(power * 100) / 100} KW`,
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
