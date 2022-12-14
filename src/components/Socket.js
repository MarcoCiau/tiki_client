import React, { useEffect } from "react";
import io from "socket.io-client";
import { setSocketIOConnected, updateStats } from "../context/actions";
import { useAppContext } from "../context/appContext";

const Realtime = () => {
  const { dispatch, devices, totalDevices, socketRoomId } = useAppContext();

  let updatedStats = {};
  useEffect(() => {
    const socket = io();
    if (totalDevices === 0) return;
    socket.on("connect", () => {
      setSocketIOConnected(dispatch, true);
      console.log("Connected Socket");
      socket.emit("room", devices[socketRoomId]._id);
    });

    socket.on("disconnect", () => {
      setSocketIOConnected(dispatch, false);
      console.log("disconnected Socket");
    });

    socket.on("deviceSensors", (msg) => {
      const payload = JSON.parse(msg);
      const {
        deviceId,
        pf,
        frequency,
        power,
        energy,
        lineVoltage,
        currentVoltage,
        timestamp,
      } = payload;

      updatedStats = {
        deviceId,
        timestamp,
        pf,
        frequency,
        power,
        energy,
        lineVoltage,
        currentVoltage,
      };

      updateStats(dispatch, payload);
    });

    return () => {
      setSocketIOConnected(dispatch, false);
      socket.disconnect();
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
      socket.off("deviceSensors");
    };
    // eslint-disable-next-line
  }, []);

  return <></>;
};

export default Realtime;
