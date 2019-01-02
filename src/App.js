import React, { Component } from 'react';
import RunningLine from './components/RunningLine';

class App extends Component {
  constructor () {
    super();

    this.initNextColomns = this.initNextColomns.bind(this);

    this.initNextColomns();
    this.defaultColomn = [
      "#ddd",
      "#ddd",
      "#ddd",
      "#ddd",
      "#ddd",
    ];

    const colors = [];
    for (let i = 0; i < 30; i++) {
      colors.push(this.defaultColomn);
    }
    this.state = {colors:  colors};
  }

  componentDidMount() {
    setInterval(() => {
      const colors = [...this.state.colors];
      const nextColomn = this.nextColomns.pop();
      colors.shift();
      colors.push(nextColomn ? nextColomn : this.defaultColomn);
      this.setState({colors: colors});
    }, 500);
  }

  initNextColomns() {
    this.nextColomns = [
      ["#000", "#000", "#000", "#000", "#000"],
      ["#000", "#ddd", "#ddd", "#ddd", "#ddd"],
      ["#000", "#ddd", "#ddd", "#ddd", "#ddd"],
      ["#000", "#000", "#000", "#000", "#000"],
      ["#ddd", "#ddd", "#ddd", "#ddd", "#ddd"],

      ["#000", "#000", "#000", "#000", "#000"],
      ["#000", "#ddd", "#000", "#ddd", "#ddd"],
      ["#000", "#000", "#ddd", "#ddd", "#ddd"],
      ["#ddd", "#ddd", "#ddd", "#ddd", "#ddd"],

      ["#000", "#000", "#000", "#000", "#000"],
      ["#ddd", "#ddd", "#ddd", "#000", "#ddd"],
      ["#ddd", "#ddd", "#000", "#ddd", "#ddd"],
      ["#000", "#000", "#000", "#000", "#000"],
      ["#ddd", "#ddd", "#ddd", "#ddd", "#ddd"],

      ["#000", "#000", "#000", "#000", "#000"],
      ["#000", "#ddd", "#000", "#ddd", "#000"],
      ["#000", "#000", "#ddd", "#000", "#000"],
      ["#ddd", "#ddd", "#ddd", "#ddd", "#ddd"],

      ["#000", "#000", "#000", "#000", "#000"],
      ["#000", "#ddd", "#000", "#ddd", "#000"],
      ["#000", "#ddd", "#000", "#ddd", "#000"],
      ["#ddd", "#ddd", "#ddd", "#ddd", "#ddd"],

      ["#000", "#ddd", "#ddd", "#ddd", "#ddd"],
      ["#000", "#000", "#000", "#000", "#000"],
      ["#000", "#ddd", "#ddd", "#ddd", "#ddd"],
      ["#ddd", "#ddd", "#ddd", "#ddd", "#ddd"],

      ["#000", "#000", "#000", "#ddd", "#000"],
    ].reverse();
  }

  render() {
    return (
      <svg width="1000" height="400" version="1.1"
        viewBox="0 0 1000 400" preserveAspectRatio="none">
        <RunningLine colors={this.state.colors}/>
      </svg>
    );
  }
}

export default App;
