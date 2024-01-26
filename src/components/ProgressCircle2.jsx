import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle2 = ({
  progress = "0.75",
  size = "40",
  title,
  description,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
          borderRadius: "50%",
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          color: colors.grey[100],
          fontWeight: "bold",
          fontSize: "35px",
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          sx={{
            position: "absolute",
            top: "calc(50% + 20px)", // Adjust the distance below the title
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: colors.grey[500],
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};
export default ProgressCircle2;
