import React from "react";
import { Line } from "@ant-design/plots";

const LineChart = ({ data, xField, yField }) => {
  const config = {
    data,
    xField,
    yField,
    seriesField: "version",
    color: ["#D62A0D", "#1979C9"],
  };

  return <Line {...config} />;
};

export default LineChart;
