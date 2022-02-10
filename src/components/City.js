import React, { useState } from "react";

const City = () => {
  const [weather, setWetaher] = useState([]);
  const api = {
    key: "07107f87d11ad7755cf382979190c8c3",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const fetchData = () => {
    fetch("https://api.openweathermap.org/data/2.5/");
  };

  const day = new Date();
  const date =
    day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
  day.toLocaleString("default", { month: "long" });

  return (
    <div className="show-city-name">
      <h1>
        Zagreb,<span>Cro</span>
      </h1>
      <h3>{date}</h3>
    </div>
  );
};

export default City;
