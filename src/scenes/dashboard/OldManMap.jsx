import React, { useState } from "react";
import MapForOld from "../../components/MapForOld"; // 경로에 맞게 조정하세요
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";

const OldManMap = () => {
  const theme = useTheme();
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="서울시지역별교통사고"
          subtitle="노인 보행자 사고에 미치는 요인분석"
        />
      </Box>

      <Box height="75vh" borderRadius="4px" style={{ position: "relative" }}>
        <MapForOld/>
      </Box>
    </Box>
  );
};

export default OldManMap;
