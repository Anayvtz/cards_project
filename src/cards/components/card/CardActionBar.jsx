import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";


import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/RoutesModel";

export default function CardActionBar({
  cardId,
  handleDelete,
  handleLike,
  phone,
}) {
  const user = useCurrentUser();
  const navigate = useNavigate();
  return (
    <CardActions sx={{ justifyContent: "space-between" }}>
      <Box>
        <IconButton onClick={() => handleDelete(cardId)}>
          <DeleteIcon />
        </IconButton>

        <IconButton onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}>
          <ModeEditIcon />
        </IconButton>
      </Box>
      <Box>
        <a href={"tel:" + phone}>
          <IconButton>
            <CallIcon />
          </IconButton>
        </a>
        <IconButton onClick={() => handleLike(cardId)}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions >
  );
}
