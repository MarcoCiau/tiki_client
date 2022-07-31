import React, { useEffect } from "react";
import io from "socket.io-client";
import { updateStats } from "../context/actions";
import { useAppContext } from "../context/appContext";

const Realtime = () => {
  const {
    dispatch,
  } = useAppContext();

  let updatedStats = {};
  useEffect(() => {
    const socket = io("http://localhost:4000");
    socket.on("connect", () => {
      console.log("Connected Socket");
      socket.emit("room", "abc123");
    });

    socket.on("disconnect", () => {
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
        timestamp
      } = payload;

      updatedStats = {
        deviceId,
        timestamp,
        pf,
        frequency,
        power,
        energy,
        lineVoltage,
        currentVoltage
      };

      updateStats(dispatch, payload);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
      socket.off("deviceSensors");
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
    </>
  );
};

export default Realtime;
