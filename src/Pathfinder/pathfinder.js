import React from "react";
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
  setIsStart = () => {
    this.setState({ isStart: true });
  };
  setIsEnd = () => {
    this.setState({ isEnd: true });
  };
  getGrid = () => {
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
  render() {
    return (
      <div className="App">
        <button className="start-gen" onClick={() => this.setIsStart(true)}>
          Start Position
        </button>
        <button className="end-gen" onClick={() => this.setIsEnd(true)}>
          End Position
        </button>
        <div className="matrix">
          {this.state.grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                className="cell"
                key={cell}
                id={cell}
                onClick={this.handleClick}
              >
                {cell}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
