import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="어린이 교통사고 위험구역" subtitle="어린이보호구역" />

      <Box height="75vh">
        <img
          src="assets/danger.png"
          alt="Danger"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Bar;
