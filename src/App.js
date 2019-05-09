import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax Call
    console.log("App - Mounted");
  }

  //constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind(this); // Needed for every Event Handler
  //}

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // arrow symbol does the same as constructor above.
    // this.obj.method(); returns reference to object
    // this.function(); returns reference to window object IF you're not in strict mode.
  };

  /*Look over this function*/
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  /*Look over this function*/
  handleReset = counterId => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c; // Returns a new array of counters with value 0.
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        {/* Filter values where value > 0, put result in c */}
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
