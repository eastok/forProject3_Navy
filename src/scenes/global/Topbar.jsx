import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isDarkmode = theme.palette.mode === "dark";
  const navigate = useNavigate();

  const handleImageClick = () => {
    colorMode.toggleColorMode();
    navigate(isDarkmode ? "/" : "/oldManMap");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <img
          onClick={handleImageClick}
          alt="profile-user"
          width="36.55px"
          height="36.55px"
          src={isDarkmode ? `../../assets/baby.png` : `../../assets/old.png`}
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
        {/* <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <Link to="/oldmanmap" style={{ color: "inherit" }}>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Link>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
