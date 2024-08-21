import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  /* changeLikeStatus, */
  createCard,
  getMyCards,
  /*  deleteCard,
   editCard,
   getCard,
   getCards,
   getMyCards, */
} from "../services/cardApiService";
import useAxios from "../../hooks/useAxios.js";
import ROUTES from "../../routes/RoutesModel.js";

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const setSnack = useSnack();
  const navigate = useNavigate();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setIsLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };
  useAxios();
  const getAllCards = useCallback(async () => {
    try {
      let response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
      );
      setCards(response.data);
      setSnack("success", "All cards are here!");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardById = useCallback(async (id) => {
    try {
      const response = await axios.get(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
      );
      const data = response.data;
      setCard(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      try {
        setIsLoading(true);
        console.log(JSON.stringify(cardFromClient));
        console.log(cardFromClient);

        const card = await createCard(cardFromClient);
        requestStatus(false, null, null, card);
        setSnack("success", "A new business card has been created");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        requestStatus(false, error, null);
        setSnack("error", error.message);
      }
    },
    [setSnack, navigate]
  );
  const handleGetMyCards = useCallback(async () => {
    try {
      setIsLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
      setSnack("error", error.message);
    }
  }, [setSnack]);

  const handleDelete = useCallback((id) => {
    console.log("Card " + id + " deleted");
  }, []);

  const handleLike = useCallback((id) => {
    console.log("Card " + id + " has been liked");
  }, []);

  return {
    cards,
    card,
    error,
    isLoading,
    getAllCards,
    getCardById,
    handleDelete,
    handleLike,
    handleCreateCard,
    handleGetMyCards,
  };
}
