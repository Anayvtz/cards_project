import React, { useEffect } from 'react'
import PageHeader from '../../Components/PageHeader'
import useCards from '../hooks/useCards';
import { useCurrentUser } from '../../users/providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/RoutesModel';
import { Container } from '@mui/material';
import CardsFeedback from '../components/CardsFeedback';
import AddNewCardButton from '../components/AddNewCardButton';


export default function MyCardsPage() {
  const { cards, filterCards, error, isLoading, handleGetMyCards, handleDelete, handleLike } =
    useCards();



  const { user } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetMyCards();
    }
  }, [user, handleGetMyCards, navigate]);

  const handleDel = async (id) => {
    await handleDelete(id);
    await handleGetMyCards();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={handleDel}
          handleLike={handleLike}

        />
        <AddNewCardButton />
      </Container>
    </div>
  );
}
