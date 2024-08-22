
import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";
import ROUTES from "../../routes/RoutesModel";
import { useCurrentUser } from "../../users/providers/UserProvider";

import useCards from "../hooks/useCards";

import CardsFeedback from "../components/CardsFeedback";
import AddNewCardButton from "../components/AddNewCardButton";

export default function FavoriteCards() {
  const { filterCards, error, isLoading, handleGetFavCards, handleDelete, handleLike } =
    useCards();


  const { user } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetFavCards();
    }
  }, [user, handleGetFavCards, navigate]);

  const handleDeleteCard = async (id) => {
    await handleDelete(id);
    await handleGetFavCards();
  };

  const handleLikeCard = async (id) => {
    await handleLike(id);
    await handleGetFavCards();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={handleDeleteCard}
          handleLike={handleLikeCard}
        />
        {(user?.user?.isBusiness || user?.user?.isAdmin) ? <AddNewCardButton /> : null}
      </Container>
    </div>
  );
}
