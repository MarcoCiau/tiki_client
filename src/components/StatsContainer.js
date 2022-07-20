import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import { FaLightbulb } from "react-icons/fa";
import { ImPower, ImPowerCord } from "react-icons/im";
import Wrapper from "../assets/wrappers/StatsContainer";
const StatsContainer = () => {
  const { overview } = useAppContext();
  const { lineVoltage=0.00, lineCurrent=0.00, frequency=0.00, pf=0.00, energy=0.00, power=0.00 } = overview;
  const defaultStats = [
    {
      title: "Line Voltage",
      count: `${lineVoltage} VAC`,
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Line Current",
      count: `${lineCurrent} A`,
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Line Frequency",
      count: `${frequency} Hz`,
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Power Factor",
      count: `${pf}`,
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Active Energy",
      count: `${energy} KWh`,
      color: "var(--primary-500)",
      bcg: "#c7e6fc",
    },
    {
      title: "Active Power",
      count: `${power} KW`,
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
