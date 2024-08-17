import { CheckBox } from "@mui/icons-material";
import { Button, TextField, List, ListItem, ListItemText, Checkbox } from "@mui/material";
import React, { useState } from "react";

export default function Todolist() {
  const [myList, setMyList] = useState([]);
  const [addTxt, setAddTxt] = useState("");
  //console.log(myList);
  const handleRemove = (id) => {
    setMyList(prev => prev.filter(item => item.id != id));
  }
  const handleCheckChange = (id, checked) => {
    setMyList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: checked } : item
      )
    );
  };
  return (
    <div style={{ margin: "20px" }}>
      <TextField
        sx={{ mt: 5, width: "100%" }}
        label="Add a new task"
        value={addTxt}
        onChange={(e) => setAddTxt(e.target.value)}
        variant="outlined"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            let date = new Date();
            setMyList((prev) => [...prev, { text: addTxt, id: date.getTime(), isComplete: false }]);
            setAddTxt("");
          }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setMyList([])}
        >
          Clear
        </Button>
      </div>
      <List sx={{ mt: 3 }}>
        {myList.map((item, index) => (
          <ListItem key={item.id}>
            <ListItemText sx={{ textDecoration: item.isComplete ? "line-through" : "" }} primary={item.text} />
            <Button variant="contained" onClick={() => handleRemove(item.id)}>remove</Button>
            <Checkbox
              checked={item.isComplete} onChange={(e) => handleCheckChange(item.id, e.target.checked)}></Checkbox>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
