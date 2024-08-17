import * as React from "react";
import Card from "@mui/material/Card";






import { CardActionArea } from "@mui/material";
import CardHeaderComponent from "./CardHeaderComponent.jsx";
import CardBody from "./CardBody.jsx";
import CardActionBar from "./CardActionBar.jsx";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/RoutesModel.js";



export default function CardComponent({ card, onEdit, onDelete, onLike }) {
    const navigate = useNavigate();
    return (
        <Card sx={{ width: 250, m: 2 }}>
            <CardActionArea onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}>
                <CardHeaderComponent
                    image={card.image.url}
                    alt={card.image.alt}
                    title={card.title}
                    subtitle={card.subtitle}
                />
                <CardBody
                    phone={card.phone}
                    address={card.address}
                    bizNumber={card.bizNumber}
                />
            </CardActionArea>
            <CardActionBar onEdit={() => onEdit(card._id)} onDelete={() => onDelete(card._id)} onLike={() => onLike(card._id)} />
        </Card>
    );
}

