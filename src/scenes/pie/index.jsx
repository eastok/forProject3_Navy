import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="어린이 보호구역 우수지역" subtitle="사고율이 낮은 도로" />
      <Box height="75vh">
        <img
          src="assets/safe.png"
          alt="Danger"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Pie;
