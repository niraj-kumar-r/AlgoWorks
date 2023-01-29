import "./App.css";

function App() {
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

  return (
    <div className="App">
      <div className="matrix">
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div className="cell" key={cell}>
              {cell}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
