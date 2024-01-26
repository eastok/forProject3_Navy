import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({
  title,
  subtitle,
  icon,
  progress,
  progress2,
  increase,
  mainTitle,
  title2,
  subtitle2,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px">
      <Box display="flex" justifyContent="space-between"></Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        {/* 두번째 요소 폰트 */}
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
      </Box>
      <Box>
        {/* {icon} */}
        {/* <Typography
            variant="h9"
            // fontWeight="bold"
            sx={{ color: colors.greenAccent[600] }}
          >
            {mainTitle}
          </Typography> */}

        <Typography
          className="multiline-text"
          variant="h3"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {/* 1805건 */}
          {title2}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" mt="2px">
        {/* 두번째 요소 폰트 */}
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {subtitle2}
        </Typography>
      </Box>
      <Box>
        {/* {icon} */}
        {/* <Typography
            variant="h9"
            // fontWeight="bold"
            sx={{ color: colors.greenAccent[600] }}
          >
            {mainTitle}
          </Typography> */}

        <Typography
          className="multiline-text"
          variant="h3"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {/* 1805건 */}
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="10px">
        {progress !== undefined && <ProgressCircle progress={progress} />}
        <Box display="flex" justifyContent="space-between" mt="2px">
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
