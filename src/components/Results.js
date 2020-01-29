import React, { Component } from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import XYAxis from "../axis/xy-axis.js";
import Grid from "../grid/grid";
import Bar from "../bar/bar.js";
import { transition } from "d3-transition";

class Results extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "000", value: 100 },
        { name: "001", value: 50 },
        { name: "010", value: 100 },
        { name: "100", value: 30 },
        { name: "101", value: 20 },
        { name: "110", value: 80 }
      ]
    };
  }

  state = {};
  render() {
    const { data } = this.state;
    const parentWidth = 500;
    const margin = {
      top: 10,
      right: 10,
      bottom: 20,
      left: 40
    };
    const ticks = 6;
    const t = transition().duration(1000);

    const width = parentWidth - margin.left - margin.right;
    const height = parentWidth * 0.5 - margin.top - margin.bottom;

    const xScale = scaleBand()
      .domain(data.map(d => d.name))
      .range([0, width])
      .padding(0.26);

    const yScale = scaleLinear()
      .domain([0, Math.max(...data.map(d => d.value))])
      .range([height, 0])
      .nice();

    return (
      <div className="my-5">
        {" "}
        <svg
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
        >
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <XYAxis {...{ xScale, yScale, height, ticks, t }} />
            <Grid {...{ xScale, yScale, width, ticks, t }} />
            <Bar
              {...{
                xScale,
                yScale,
                data,
                height,
                t
              }}
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default Results;
