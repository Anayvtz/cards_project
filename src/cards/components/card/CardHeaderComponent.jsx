import React from 'react'
import { CardHeader } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

export default function CardHeaderComponent({ image, alt, title, subtitle }) {
    return (
        <>
            <CardMedia sx={{ height: 140 }} image={image} alt={alt} />
            <CardHeader title={title} subheader={subtitle} />
            <Divider variant="middle" />
        </>
    );
}
