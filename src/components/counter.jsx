import React, { Component } from "react";

class Counter extends Component {
  render() {
    //console.log("props", this.props); // gets props for every counter object
    console.log("counter - Rendered");
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} // () => to pass in parameters to event
          className="btn btn-secodary btn-sm"
        >
          {/*Notice how we don't reference the functon for onclick*/}
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* Counter will raise the delete event, counters.jsx will handle it */}
      </div>
    );
  }

  formatCount() {
    const { value: count } = this.props.counter; // count = this.state.value;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
