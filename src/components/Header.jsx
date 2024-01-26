import { Typography, Box, Button, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle, onButtonClick, page }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    // 헤더 공간 박스위
    <Box mb="20px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
      {/* {onButtonClick && (
        <Button
          onClick={() => onButtonClick(page)} // page 변수 전달
          variant="contained"
          sx={{
            width: "10%",
            backgroundColor: "#7777", // 원하는 색상으로 변경
            color: colors.primary,
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <img
            src={
              page === "children"
                ? `../../assets/baby.png`
                : `../../assets/old.png`
            }
            alt="Button Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Button>
      )} */}
    </Box>
  );
};

export default Header;
