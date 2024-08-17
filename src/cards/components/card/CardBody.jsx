import React from 'react'
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function CardBody({ phone, address, bizNumber }) {
    return (
        <>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <strong>Phone: </strong>
                    {phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Address: </strong>
                    {address.city} {address.street} {address.houseNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Card Number: </strong>
                    {bizNumber}
                </Typography>
            </CardContent>
        </>
    );
}

