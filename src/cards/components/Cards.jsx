import AddNewCardButton from "./AddNewCardButton";
import CardComponent from "./card/CardComponent";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function Cards({ cards, handleDelete, handleLike, handleEdit }) {
  const user = useCurrentUser();

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <CardComponent
          card={card}
          key={card._id}
          handleDelete={handleDelete}
          handleLike={handleLike}
          handleEdit={handleEdit}
        />
      ))}

      {console.log(user)}
      {(user?.user?.isBusiness || user?.user?.isAdmin) ? <AddNewCardButton /> : null}

    </Container>
  );
}
