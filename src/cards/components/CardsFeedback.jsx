import React from 'react'
import Spinner from '../../Components/Spinner'
import Error from '../../Components/Error';
import Cards from './Cards';
import { Typography } from '@mui/material';

export default function CardsFeedback({ isLoading, cards, error, handleDelete, handleLike }) {
    if (isLoading) {
        return (<Spinner />);
    }
    if (error) {
        return (<Error errorMessage={error} />);
    }
    if (cards && cards.length) {
        return (<Cards cards={cards} handleDelete={handleDelete} handleLike={handleLike} />);
    } else {
        return (<Typography>No cards</Typography>)
    }

}
