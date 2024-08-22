import React, { useState } from "react";
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
  likes,
  user_id,
}) {
  const user = useCurrentUser();
  const [isLiked, setIsLiked] = useState(() => likes.includes(user?.user?._id));
  const navigate = useNavigate();

  const handleLikeCard = async () => {
    await handleLike(cardId);
    setIsLiked((prev) => !prev);
  };

  return (
    <CardActions sx={{ justifyContent: "space-between" }}>
      {user?.user?.isAdmin || user?.user?._id === user_id ? (
        <Box>

          <IconButton onClick={() => handleDelete(cardId)}>
            <DeleteIcon />
          </IconButton>

          <IconButton onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}>
            <ModeEditIcon />
          </IconButton>
        </Box>) : null}
      <Box>
        <a href={"tel:" + phone}>
          <IconButton>
            <CallIcon />
          </IconButton>
        </a>
        {user && (<IconButton aria-label="Add to favorite" onClick={handleLikeCard}>
          <FavoriteIcon color={isLiked ? "error" : "inherit"} />
        </IconButton>)}
      </Box>
    </CardActions >
  );
}
