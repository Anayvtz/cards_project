import AddNewCardButton from "./AddNewCardButton";
import CardComponent from "./card/CardComponent";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function Cards({ cards, handleDelete, handleLike }) {
  const user = useCurrentUser();
  const handleEdit = (id) => {
    console.log("editing card " + id);
  };
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
      {/* <Fab color="primary"> */}
      {/* <AddIcon> */}
      {console.log(user)}
      {(user.isBusiness || user.isAdmin) ? <AddNewCardButton /> : null}
      {/* </AddIcon> */}
      {/* </Fab> */}
    </Container>
  );
}
