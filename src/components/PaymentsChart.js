import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

export default class PaymentsChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/pie-chart-of-straight-angle-oz0th";

  render() {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#A91B2C"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
