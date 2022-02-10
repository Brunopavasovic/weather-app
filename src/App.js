import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="search">
          <label>Search your city :</label>
          <input
            type="text"
            className="input-bar"
            placeholder="search city..."
          ></input>
          <Button />
        </div>
        <div className="show-city-name">
          <h1>
            Zagreb,<span>CRO</span>
          </h1>
        </div>
        <div className="show-date">
          <h3>date</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
