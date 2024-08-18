import React from "react";
import { Box } from "@mui/material";

import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavBarItem from "../../../routes/components/NavBarItem";
import ROUTES from "../../../routes/RoutesModel";
export default function LeftNavBar() {
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavBarItem to={ROUTES.CARDS} label={"Cards"} />
      <NavBarItem to={ROUTES.ABOUT} label={"About"} />
      <NavBarItem to={ROUTES.SANDBOX} label={"Sandbox"} />
    </Box>
  );
}
