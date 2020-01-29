import React, { Component } from "react";
import "codemirror/lib/codemirror.css";
import CodeMirror from "react-codemirror";
import Composer from "./Composer";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      name: "CodeMirror",
      code: "OpenQASM 1.0",
      lineCount: 1,
      line: [{ id: 0, value: 0 }]
    };
  }
  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }
  render() {
    let options = {
      lineNumbers: true
    };
    return (
      <div className="row">
        <div className="col-xl-4 mt-3 border border-dark rounded bg-white">
          <p>&nbsp;Code editor</p>
          <CodeMirror
            value={this.state.code}
            onChange={this.updateCode.bind(this)}
            options={options}
          />
        </div>
        <div className="col-xl-7 bg-white ml-3 mt-3 px-5 py-1 border border-dark rounded">
          {this.state.line.map(l => (
            <Composer key={l.id} value={l.value} />
          ))}
          <button onClick={this.addLine}> + </button>
        </div>
      </div>
    );
  }
  addLine = () => {
    const lines = this.state.line.concat({
      id: this.state.lineCount,
      value: this.state.lineCount
    });
    this.setState({ lineCount: this.state.lineCount + 1, line: lines });
  };
}

export default Editor;
