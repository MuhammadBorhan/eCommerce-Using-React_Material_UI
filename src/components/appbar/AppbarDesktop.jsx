import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Colors } from "../../styles/theme";
import RightBarIcon from "./RightBarIcon";

const AppbarDesktop = ({ matches }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "4px",
        padding: "2px 8px",
      }}
    >
      <Typography
        sx={{ padding: "4px", fontSize: "4em", flex: "2", cursor: "pointer" }}
        color={Colors.secondary}
      >
        My Bags
      </Typography>
      <List
        sx={{
          display: "flex",
          flex: "3",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <RightBarIcon />
    </Box>
  );
};

export default AppbarDesktop;
