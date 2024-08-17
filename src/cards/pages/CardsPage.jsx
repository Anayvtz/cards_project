import React, { useEffect, useState } from 'react'
import PageHeader from '../../Components/PageHeader'
import Cards from '../components/Cards'
import axios from 'axios';
import CardsFeedback from '../components/CardsFeedback';
import AddNewCardButton from '../components/AddNewCardButton';

export default function CardsPage() {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        const getAllCards = async () => {
            try {
                let response = await axios.get(
                    "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
                );

                console.log(response.data);
                setCards(response.data);
            } catch (err) {
                setError(err.message);
            }
            setIsLoading(false);
        };
        getAllCards();
    }, []);
    const handleDelete = (id) => {
        console.log("Card " + id + " deleted");
    };
    const handleLike = (id) => {
        console.log("Card " + id + " has been liked");
    };
    return (
        <div>
            <PageHeader
                title="Cards"
                subtitle="On this page you can find all bussines cards from all categories"
            />
            <CardsFeedback cards={cards} handleDelete={handleDelete} handleLike={handleLike} isLoading={isLoading} error={error} />
            <AddNewCardButton />
        </div>
    )
}
