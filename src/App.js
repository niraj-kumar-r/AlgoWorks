import "./App.css";
import { useState } from "react";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const ROW_SIZE = 5;
  const COL_SIZE = 5;
  const grid = [];
  for (let i = 0; i < ROW_SIZE; i++) {
    const row = [];
    for (let j = 0; j < COL_SIZE; j++) {
      row.push(i * 10 + j);
    }
    grid.push(row);
  }

  const handleClick = (event) => {
    if (isStart) {
      document.getElementById(event.target.id).style.backgroundColor = "green";
    }
    if (isEnd) {
      document.getElementById(event.target.id).style.backgroundColor = "red";
    }
  };

  return (
    <div className="App">
      <button className="start-gen" onClick={() => setIsStart(true)}>
        Start Position
      </button>
      <button className="end-gen" onClick={() => setIsEnd(true)}>
        End Position
      </button>
      <div className="matrix">
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div className="cell" key={cell} id={cell} onClick={handleClick}>
              {cell}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
