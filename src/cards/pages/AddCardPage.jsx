import { Container } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";

import { useCurrentUser } from "../../users/providers/UserProvider";
import CardForm from "../components/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useCards from "../hooks/useCards";
import cardSchema from "../models/cardSchema";
import ROUTES from "../../routes/RoutesModel";

export default function AddCardPage() {
    const { user } = useCurrentUser();
    const { handleCreateCard } = useCards();

    const { data, setData, errors, ...rest } = useForm(
        initialCardForm,
        cardSchema,
        () => {
            handleCreateCard({
                ...normalizeCard({ ...data }),
                user_id: user._id,

            });
        }
    );
    //useEffect - update the form data to this card data

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
                title="add card"
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
