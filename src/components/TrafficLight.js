import React, { Component } from "react";
import classNames from "classnames";

import "./TrafficLight.css";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
        currentColor: RED
    }
    setInterval(() => {
        this.setState({
            currentColor: this.getNextColor(this.state.currentColor)
        });
    }, 1000)
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
      const { currentColor } = this.state;
    return (
      <div className="TrafficLight">
        <div className={classNames('buld', 'red', {
            active: currentColor === RED
        })} />
        <div className={classNames('buld', 'orange', {
            active: currentColor === ORANGE
        })} />
        <div className={classNames('buld', 'green', {
            active: currentColor === GREEN
        })} />
        
      </div>
    );
  }
}

export default TrafficLight;
