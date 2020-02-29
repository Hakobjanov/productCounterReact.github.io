import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
      const {counters,
        onReset,
        onHandleInc,
        onDelete} = this.props
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >
          RESET
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onHandleInc={onHandleInc}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
