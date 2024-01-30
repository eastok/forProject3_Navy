import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header
        title="교통사고 예측"
        subtitle="지역구별 어린이사고수와 예측 어린이 사고수"
      />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
