import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <h1>지도가 안나와</h1>
      <iframe
        src=".child.html"
        width="100%"
        height="600px"
        title="Seoul Traffic Accidents"
      ></iframe>
    </div>
  );
};

export default GeographyChart;
