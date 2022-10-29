import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import React from "react";
import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";

const Appbar = () => {
  const theme = useTheme();
  const mathces = useMediaQuery(theme.breakpoints.down("md"));
  return <>{mathces ? <AppbarMobile /> : <AppbarDesktop />}</>;
};

export default Appbar;
