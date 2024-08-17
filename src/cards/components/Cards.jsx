import React from 'react'
import CardComponent from "./card/CardComponent.jsx";
import { Container } from '@mui/material';


export default function Cards({ cards, handleDelete, handleLike }) {
    const handleEdit = (id) => { console.log(`the card ${id} is edited `); }
    return (
        <Container sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {cards?.map(item => <CardComponent card={item} key={item._id} onEdit={handleEdit} onDelete={handleDelete} onLike={handleLike} />)}

        </Container>
    )
}
