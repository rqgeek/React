import React, { Component } from "react";

class Composer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="d-inline-flex mt-1">q[{this.props.value}]</div>
          <div className="col">
            <div className="bg-primary mt-3 mw-100" style={{ height: 2 }}></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Composer;
