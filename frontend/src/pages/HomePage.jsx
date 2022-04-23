import { Hidden } from "@mui/material";
import React, { useState, useEffect } from "react";
import SimpleMap from "../components/SimpleMap";
import TopBar from "../components/TopBar/TopBar";
import { useNavigate } from "react-router-dom";

const AnyReactComponent = ({ text, onClick }) => (
  <div
    onClick={onClick}
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <img
      src="/location.png"
      style={{
        height: "40px",
      }}
    />
    <div
      style={{
        color: "white",
        paddingTop: "5px",
        fontSize: "10px",
        fontWeight: "bold",
        width: "200px",
      }}
    >
      {text}
    </div>
  </div>
);

const HomePage = () => {
  const [position, setPosition] = useState({});

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setPosition({
      // lat: position.coords.latitude - 7.639,
      // lng: position.coords.longitude + 1.61,
      lng: 86.14663,
      lat: 22.775997,
    });
  }

  getLocation();
  const navigate = useNavigate();
  return (
    <>
      <TopBar />
      <div style={{ height: "90vh", overflow: "hidden" }}>
        <SimpleMap center={position}>
          <AnyReactComponent
            onClick={() => navigate("/event/12345")}
            lat={22.775997}
            lng={86.14663}
            text="My Marker 1"
          />
          <AnyReactComponent
            onClick={() => navigate("/event/12345")}
            lat={22.975997}
            lng={86.14663}
            text="My Marker 2"
          />
          <AnyReactComponent
            onClick={() => navigate("/event/12345")}
            lat={22.775997}
            lng={86.54663}
            text="My Marker 1"
          />
          <AnyReactComponent
            onClick={() => navigate("/event/12345")}
            lat={22.175997}
            lng={86.94663}
            text="My Marker 2"
          />
        </SimpleMap>
      </div>
    </>
  );
};

export default HomePage;
