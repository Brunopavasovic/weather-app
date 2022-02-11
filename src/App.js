import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const api = {
    key: "07107f87d11ad7755cf382979190c8c3",
    base: "http://api.openweathermap.org/data/2.5/",
  };

  const fetchData = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
      });
  };

  const addDate = (d) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = days[d.getDay()];
    const month = months[d.getMonth()];
    const date = d.getDate();
    const year = d.getFullYear();

    return `${day} , ${month} ${date} , ${year}.`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "warm"
            : "App"
          : "App"
      }
    >
      <div className="container">
        <div className="search">
          <label>Search your city :</label>
          <input
            id="city-list"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="input-bar"
            placeholder="search city..."
          ></input>
          <datalist id="city-list">{weather.name}</datalist>
          <button onClick={fetchData} className="btn" type="submit">
            Search
          </button>
        </div>
        {weather.main ? (
          <div className="data-container">
            <div className="show-city-name">
              <h1>
                {weather.name},<span>{weather.sys.country}</span>
              </h1>
            </div>
            <div className="show-date">
              <h3>{addDate(new Date())}</h3>
            </div>
            <div className="celsius">
              <h1 className="show-celsius">
                {Math.round(weather.main.temp)}°c
              </h1>
            </div>
            <div className="sky">
              <h3 className="show-sky">{weather.weather[0].main}</h3>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
