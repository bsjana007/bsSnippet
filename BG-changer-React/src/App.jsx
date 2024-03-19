// import logo from "./logo.svg";
// import { useState } from "react";
import { useState } from "react";
import "./App.css";
// import Card from "./components/card.jsx";

function App() {
  const [color, setColor] = useState("#282c34");
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-lg">
            <button
              className="outline-none px-4 rounded-md"
              onClick={() => setColor("#282c34")}
              style={{
                backgroundColor: "#282c34",
                color: "white",
                fontFamily: "serif",
              }}
            >
              Default
            </button>
            <button
              className="outline-none px-4 rounded-md"
              onClick={() => setColor("red")}
              style={{
                backgroundColor: "red",
                color: "white",
                fontFamily: "serif",
              }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 rounded-md border-b-2 border-gray-400"
              onClick={() => setColor("white")}
              style={{
                backgroundColor: "White",
                color: "Black",
                fontFamily: "serif",
              }}
            >
              Light
            </button>
            <button
              className="outline-none px-4 rounded-md"
              onClick={() => setColor("rgb(183, 183, 223)")}
              style={{
                backgroundColor: "rgb(183, 183, 223)",
                color: "Black",
                fontFamily: "serif",
              }}
            >
              Lavender
            </button>
            <button
              className="outline-none px-4 rounded-md"
              onClick={() => setColor("green")}
              style={{
                backgroundColor: "green",
                color: "White",
                fontFamily: "serif",
              }}
            >
              Green
            </button>
            <button
              className="outline-none px-4 rounded-md"
              onClick={() => setColor("blue")}
              style={{
                backgroundColor: "rgb(0, 0, 255)",
                color: "white",
                fontFamily: "serif",
              }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
