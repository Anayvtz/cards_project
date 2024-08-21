import React from "react";

import IconButton from "@mui/material/IconButton";

import { Typography } from "@mui/material";
import useUsers from "../../../users/hooks/useUsers";

export default function Logout() {
    const { handleLogout } = useUsers();
    return (
        <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }} onClick={() => { handleLogout(); }}>
            <Typography>Logout</Typography>
        </IconButton>

    );
}