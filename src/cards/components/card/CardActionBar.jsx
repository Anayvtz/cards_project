import React from 'react'
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { useUser } from '../../../users/providers/UserProvider';


export default function CardActionBar({ onEdit, onDelete, onLike }) {
    const userCtxt = useUser();
    return (
        <div><CardActions sx={{ justifyContent: "space-between" }}>
            <Box>
                <IconButton onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={onEdit} >
                    <ModeEditIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <CallIcon />
                </IconButton>
                <IconButton onClick={onLike}>
                    <FavoriteIcon />
                </IconButton>
            </Box>
        </CardActions></div>
    )
}
