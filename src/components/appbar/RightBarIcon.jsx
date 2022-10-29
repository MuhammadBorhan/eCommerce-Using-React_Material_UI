import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { Divider, List, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";

const RightBarIcon = () => {
  return (
    <List
      sx={{
        display: "flex",
        flex: "2",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Divider orientation="vertical" flexItem />
      <ListItemButton sx={{ justifyContent: "center" }}>
        <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
          <ShoppingCart />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton sx={{ justifyContent: "center" }}>
        <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
          <Favorite />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton sx={{ justifyContent: "center" }}>
        <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
          <Person />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
    </List>
  );
};

export default RightBarIcon;
