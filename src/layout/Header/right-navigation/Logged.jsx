import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

export default function Logged() {
  return (

    <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
      <Avatar alt="avatar" src="/images/avatar.png" />
    </IconButton>

  );
}
