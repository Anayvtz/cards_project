import { Button } from '@mui/material'
import React from 'react'
import AddCardPage from '../pages/AddCardPage'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../routes/RoutesModel';

export default function AddNewCardButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(ROUTES.CREATE_CARD);
    }
    return (
        <div>
            <Button variant="contained" sx={{ borderRadius: "50%", aspectRatio: "1/1" }} onClick={handleClick}>+</Button>
        </div>
    )
}
