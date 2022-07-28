import React, { useState } from 'react'
import AreaChart from './AreaChart'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/ChartsContainer'

function ChartsContainer() {
  const { stats: data } = useAppContext()
  return (
    <Wrapper>
      <div className='chartContainer'>
        <AreaChart data={data.current} title={"Amperage"}/>
        <AreaChart data={data.activeKwh} title={"Energy Consumption"}/>
      </div>
      <div className='chartContainer'>
        <AreaChart data={data.voltage} title={"Voltage"}/>
        <AreaChart data={data.activeKwh} title={"Frequency"}/>
      </div>
    </Wrapper>
  )
}
export default ChartsContainer;
