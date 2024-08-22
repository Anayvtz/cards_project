import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  /* changeLikeStatus, */
  createCard,
  deleteCard,
  editCard,
  getCard,
  getMyCards,
  /*  
   
   getCard,
   getCards,
    */
} from "../services/cardApiService";
import useAxios from "../../hooks/useAxios.js";
import ROUTES from "../../routes/RoutesModel.js";

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [filterCards, setFilterCards] = useState(null);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();

  const setSnack = useSnack();
  const navigate = useNavigate();

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

  const handleLike = useCallback((id) => {
    console.log("Card " + id + " has been liked");
  }, []);

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
  };
}
