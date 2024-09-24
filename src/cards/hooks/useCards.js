import { useCallback, useEffect, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";
import useAxios from "../../hooks/useAxios.js";
import ROUTES from "../../routes/RoutesModel.js";
import { useCurrentUser } from "../../users/providers/UserProvider.jsx";

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [filterCards, setFilterCards] = useState(null);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();

  const user = useCurrentUser();
  const setSnack = useSnack();
  const navigate = useNavigate();
  //const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";
  //const apiUrl="http://localhost:8182/cards";
  const apiUrl = "https://cardsserver-5bme.onrender.com/cards"
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);
  useEffect(() => {
    if (cards)
      setFilterCards(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
  }, [cards, query]);

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
        apiUrl
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
        `${apiUrl}/${id}`
        //`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
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


  const handleDelete = useCallback(async (cardId) => {
    try {
      setIsLoading(true);
      await deleteCard(cardId);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }, []);

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      try {
        setIsLoading(true);
        const card = await editCard(cardId, cardFromClient);
        requestStatus(false, null, null, card);
        setSnack("success", "The business card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [setSnack, navigate]
  );

  const handleGetCard = useCallback(async (cardId) => {
    try {
      setIsLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLike = useCallback(
    async (cardId) => {
      try {
        await changeLikeStatus(cardId);
        setSnack("success", "The business card has been Liked");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [setSnack]
  );

  const handleGetFavCards = useCallback(async () => {
    try {
      setIsLoading(true);
      const cards = await getCards();
      const favCards = cards.filter((card) => card.likes.includes(user?.user?._id));
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [user]);

  return {
    cards,
    card,
    filterCards,
    error,
    isLoading,
    getAllCards,
    getCardById,
    handleDelete,
    handleLike,
    handleCreateCard,
    handleGetMyCards,
    handleUpdateCard,
    handleGetCard,
    handleGetFavCards,
  };
}
