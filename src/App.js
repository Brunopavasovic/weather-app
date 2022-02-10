import "./App.css";
import City from "./components/City";

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
          <button className="btn" type="submit">
            Search
          </button>
        </div>
        <City />
      </div>
    </div>
  );
}

export default App;
