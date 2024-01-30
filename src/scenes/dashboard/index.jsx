import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import Header from "../../components/Header";

import Map from "../../components/Map";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        
        <Header
          title="서울시지역별교통사고"
          subtitle="노인/어린이 보행자 사고에 미치는 요인분석"
        />
      </Box>

      {/* <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        style={{ position: "relative" }}
      > */}
      <Map />
      {/* </Box> */}
    </Box>
  );
};

export default Dashboard;
