import "./App.css";
import { React, useEffect, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(10);
  const capitalCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smallCase = "abcdefghijklmnopqrstuvwxyz";
  const numaric = "0123456789";
  const char = "`~!@#$%^&*()-_=+/*,./<>?;':";

  useEffect(() => {
    let password = "";
    let characterSet = capitalCase + smallCase;

    if (numberAllowed) {
      characterSet += numaric;
    }

    if (charAllowed) {
      characterSet += char;
    }

    for (let i = 0; i < length; i++) {
      password += characterSet[Math.floor(Math.random() * characterSet.length)];
    }

    setPassword(password);
  }, [setPassword, numberAllowed, charAllowed, length]);

  return (
    <div className="main">
      <div className="up">
        <input type="text" className="passinput" value={password} disabled />
        <button
          className="copyclip"
          onClick={() => {
            window.navigator.clipboard.writeText(password);
          }}
        >
          Copy
        </button>

        <div className="down">
          <div className="user-input">
            <label htmlFor="range" class="form-label">
              Length
            </label>
            <input
              type="range"
              className="form-range"
              id="range"
              min={5}
              max={20}
              step={1}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <span>{length}</span>
          </div>

          <div className="user-input">
            <input
              class="form-check-input"
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              value={numberAllowed}
              id="numbercheakbox"
            />
            <label class="form-check-label" htmlFor="numbercheakbox">
              Number
            </label>
          </div>

          <div className="user-input">
            <input
              class="form-check-input"
              type="checkbox"
              id="charcheakbox"
              defaultChecked={charAllowed}
              value={numberAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label class="form-check-label" htmlFor="charcheakbox">
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
