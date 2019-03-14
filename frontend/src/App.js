import React, { Component } from 'react';
import './App.css';
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
import { API_FIBONACCI_METHOD, post } from "./commons/commons";
import ChartComponent from "./ChartComponent";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      depth: 10,
      result: null,
      error: null
    };

    this.start = this.start.bind(this);
    this.changeDepth = this.changeDepth.bind(this);
    this.setResult = this.setResult.bind(this);
    this.setError = this.setError.bind(this);
    this.keyPressEnter = this.keyPressEnter.bind(this);
  }

  start(e) {
    //
    post(API_FIBONACCI_METHOD, { depth: this.state.depth }, this.setResult, this.setError);
  }

  changeDepth(e) {
    this.setState({
      depth: Math.min(e.currentTarget.value, 100),
    })
  }

  setResult(d) {
    this.setState({ result: d });
  }

  setError(d) {
    this.setState({ error: d });
  }

  keyPressEnter = (e) => {
    if (e.key === 'Enter') {
      this.start();
    }
  };

  render() {

    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6">
          <small style={{ marginLeft: 5 }}>От 0 до 100</small>
          <InputGroup>
            <InputGroupAddon addonType="prepend" onClick={this.start}>
              <Button color={"primary"} outline={true}>Start</Button>
            </InputGroupAddon>
            <Input className="text-center"
              style={{ minWidth: 100 }}
              min={2} max={100}
              type={"number"}
              value={this.state.depth}
              onChange={this.changeDepth}
              onKeyPress={this.keyPressEnter}
            />
          </InputGroup>
          {
            this.state.error ? <div className="bg-danger text-white">{this.state.error}</div> : null
          }
          <ChartComponent data={this.state.result ? this.state.result.data : []} />
        </div>
      </div>
    );
  }
}

export default App;
