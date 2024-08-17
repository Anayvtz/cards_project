import { Button, Container, TextField } from "@mui/material";
import Joi from "joi";
import React, { useCallback, useState } from "react";
import useForm from "../../forms/hooks/useForm";

const initialForm = {
  firstName: "",
  lastName: "",
};

const schema = {
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2).max(12),
};
const printSomething = (something) => {
  console.log(something);
};

export default function FormExample() {
  const { data, errors, handleChange, validateForm, onSubmit } = useForm(
    initialForm,
    schema,
    printSomething
  );

  return (
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label="first name"
        name="firstName"
        onChange={handleChange}
        value={data.firstName}
        error={Boolean(errors.firstName)}
        helperText={errors.firstName}
      />
      <TextField
        label="last name"
        name="lastName"
        onChange={handleChange}
        value={data.lastName}
        error={Boolean(errors.lastName)}
        helperText={errors.lastName}
      />

      <Button disabled={!validateForm()} onClick={onSubmit}>
        Submit
      </Button>
    </Container>
  );
}
