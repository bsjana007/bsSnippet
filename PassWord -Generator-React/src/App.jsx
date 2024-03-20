// import logo from "./logo.svg";
// import Card from "./components/card.jsx";
import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charecter, setCharecter] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }

    if (charecter) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, charecter, setPassword]);

  let copyToClipbord = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
    document.querySelector(
      "#copy"
    ).innerHTML = `<button  id="copy" className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0">Copied</button>`;
  }, [password]);

  const resetCopy = () => {
    document.querySelector(
      "#copy"
    ).innerHTML = `<button  id="copy" className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0">Copy</button>`;
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charecter, passwordGenerator]);

  return (
    <div className="App w-full max-w-md  mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700">
      {/* <header className="App-header"></header> */}
      <h1 className="text-4xl text-center text-white my-3">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipbord}
          id="copy"
          className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer "
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
            onClick={resetCopy}
          />
          <label htmlFor="numberInput" className="text-white">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charecter}
            id="charInput"
            onChange={() => {
              setCharecter((prev) => !prev);
            }}
            onClick={resetCopy}
          />
          <label htmlFor="charInput" className="text-white">
            Charecters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
