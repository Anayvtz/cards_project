import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
import ROUTES from "../../routes/RoutesModel";
import { useNavigate } from "react-router-dom";
export default function useCards() {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [card, setCard] = useState();
    const setSnack = useSnack();
    const navigate = useNavigate();
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
    const handleDelete = useCallback((id) => {
        console.log("Card " + id + " deleted");
    }, []);
    const handleLike = useCallback((id) => {
        console.log("Card " + id + " has been liked");
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
    /*  const handleCreateCard = useCallback(
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
             }
         },
         [setSnack, navigate]
     ); */
    return { cards, card, error, isLoading, getAllCards, handleDelete, handleLike, getCardById };
}