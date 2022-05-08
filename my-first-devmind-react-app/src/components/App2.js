import React from "react";
 
class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      counterValue: 0,
    };
  }
 
  render() {
    const counterValueText = "Fist counter value " + this.state.counterValue;
    return (
      <div id="container">
        <div>
          <button
            onClick={(event) => {
              this.setState((state, props) => {
                return {
                  counterValue: state.counterValue - 1,
                };
              });
            }}
          >
            -
          </button>
          <span>{counterValueText}</span>
          <button
            onClick={(event) => {
              this.setState((state, props) => {
                return {
                  counterValue: state.counterValue + 1,
                };
              });
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={(event) => {
            this.setState({ counterValue: 0 });
          }}
        >
          Reset counter
        </button>
      </div>
    );
  }
}
 
export default App2;

