import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="어린이 교통사고 낮은 도로" subtitle="어린이보호구역" />
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
