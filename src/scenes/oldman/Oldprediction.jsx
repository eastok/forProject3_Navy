import React from "react";
import Header from "../../components/Header";
import { Box} from "@mui/material";
import Oldline from "./Oldline";

const Oldprediction = () => {
  return (
  <Box m="20px">
  <Header
    title="교통사고 예측"
    subtitle="지역구별 노인보행자 사고수와 예측 노인 보행자 사고수"
  />
  <Box height="75vh">
    <Oldline />
  </Box>
</Box>
);
};

export default Oldprediction;
