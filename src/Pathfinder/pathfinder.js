import React from "react";
import Algorithms from "../Algorithms/algorithms";
import "./pathfinder.css";

export default class Pathfinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      isStart: false,
      isEnd: false,
    };
  }
  setIsStart = (val) => {
    this.setState({ isStart: val });
  };
  setIsEnd = (val) => {
    this.setState({ isEnd: val });
  };
  getGrid = () => {
    const ROW_SIZE = 5;
    const COL_SIZE = 5;
    const grid = [];
    for (let i = 0; i < ROW_SIZE; i++) {
      const row = [];
      for (let j = 0; j < COL_SIZE; j++) {
        row.push({ row: i, col: j });
      }
      grid.push(row);
    }
    return grid;
  };
  componentDidMount() {
    const grid = this.getGrid();
    this.setState({ grid });
  }
  handleClick = (event) => {
    if (this.state.isStart) {
      if (document.getElementsByClassName("start").length > 0) {
        document.getElementsByClassName("start")[0].style.backgroundColor =
          "white";
        document.getElementsByClassName("start")[0].className = "cell";
      }
      document.getElementById(event.target.id).style.backgroundColor = "green";
      document.getElementById(event.target.id).className = "cell start";
    }

    if (this.state.isEnd) {
      if (document.getElementsByClassName("end").length > 0) {
        document.getElementsByClassName("end")[0].style.backgroundColor =
          "white";
        document.getElementsByClassName("end")[0].className = "cell";
      }
      document.getElementById(event.target.id).style.backgroundColor = "red";
      document.getElementById(event.target.id).className = "cell end";
    }
  };

  bfs = () => {
    const grid = this.state.grid;
    const startNode = document.getElementsByClassName("start")[0].id.split(" ");
    const endNode = document.getElementsByClassName("end")[0].id.split(" ");
    Algorithms.bfs(grid, startNode, endNode);
  };

  render() {
    return (
      <div className="App">
        <button
          className="start-gen"
          onClick={() => {
            this.setIsStart(true);
            this.setIsEnd(false);
          }}
        >
          Start Position
        </button>
        <button
          className="end-gen"
          onClick={() => {
            this.setIsEnd(true);
            this.setIsStart(false);
          }}
        >
          End Position
        </button>
        <div className="matrix">
          {this.state.grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                className="cell"
                id={cell.row + " " + cell.col}
                onClick={this.handleClick}
              >
                {cell.row + "" + cell.col}
              </div>
            ))
          )}
        </div>
        <button className="bfs">BFS</button>
      </div>
    );
  }
}
