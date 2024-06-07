import React from "react";

interface CounterProps {
  defaultCount: number;
}
interface CounterState {
  count: number;
}
class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    this.state = {
      count: props.defaultCount,
    };
  }
  state: CounterState;
  increment = () => {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  };
  decrement = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>-</button>
        <button onClick={this.decrement}>+</button>
      </div>
    );
  }
}

export { Counter };
