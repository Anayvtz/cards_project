import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import useCards from '../hooks/useCards';
import { useCurrentUser } from '../../users/providers/UserProvider';
import useForm from '../../forms/hooks/useForm';
import ROUTES from '../../routes/RoutesModel';
import { Container } from '@mui/material';
import CardForm from '../components/CardForm';
import mapCardToModel from '../helpers/normalization/mapCardToModel';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/cardSchema';
import normalizeCard from '../helpers/normalization/normalizeCard';

export default function EditCardPage() {
    //what do we need in this page
    //id of the card - useParams
    const { id } = useParams();
    //handleUpdateCard & handleGetCard & card - useCards
    const {
        handleUpdateCard,
        handleGetCard,
        card,
    } = useCards();

    //user - useUser (provider)
    const { user } = useCurrentUser();
    //useForm (initialForm,schema,onSubmit)
    const { data, setData, errors, ...rest } = useForm(
        initialCardForm,
        cardSchema,
        () => {
            handleUpdateCard(card._id, {
                ...normalizeCard({ ...data }),
                bizNumber: card.bizNumber,
                user_id: card.user_id,
            });
        }
    );
    //useEffect - update the form data to this card data
    useEffect(() => {
        handleGetCard(id).then((data) => {
            const modelCard = mapCardToModel(data);
            setData(modelCard);
        });
    }, [handleGetCard, setData, id]);

    if (!user) return <Navigate replace to={ROUTES.CARDS} />;

    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CardForm
                title="edit card"
                onSubmit={rest.onSubmit}
                onReset={rest.handleReset}
                errors={errors}
                onFormChange={rest.validateForm}
                onInputChange={rest.handleChange}
                data={data}
            />
        </Container>
    );
}
