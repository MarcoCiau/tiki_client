import React, { useState } from "react";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

function ChartsContainer() {
  const {
    voltageTimeSeries,
    amperageTimeSeries,
    energyTimeSeries,
    frequencyTimeSeries
  } = useAppContext();
  return (
    <Wrapper>
      <div className="chartContainer">
        <AreaChart data={amperageTimeSeries} title={"Amperage"} />
        <AreaChart data={energyTimeSeries} title={"Energy Consumption"} />
      </div>
      <div className="chartContainer">
        <AreaChart data={voltageTimeSeries} title={"Voltage"} />
        <AreaChart data={frequencyTimeSeries} title={"Frequency"} />
      </div>
    </Wrapper>
  );
}
export default ChartsContainer;
