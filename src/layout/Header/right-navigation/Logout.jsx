import React from "react";

import IconButton from "@mui/material/IconButton";

import { Typography } from "@mui/material";
import useUsers from "../../../users/hooks/useUsers";
import { useCurrentUser } from "../../../users/providers/UserProvider";

export default function Logout() {
    const { handleLogout } = useUsers();
    const { email } = useCurrentUser();
    return (
        <IconButton sx={{ p: 0, display: "inline-flex", flexDirection: "column", marginLeft: 2 }} onClick={() => { handleLogout(); }}>
            <Typography>Logout</Typography>
            <Typography>{email}</Typography>
        </IconButton>

    );
}