import React from "react";
import { useGate, useStore } from "effector-react";
import { Button, TextField, Typography } from "@mui/material";
import {
  Container,
  FiltersBar,
  FlexFormContainer,
  ResultsList,
} from "../../features";
import {
  $search,
  searchButtonClicked,
  searchChanged,
  searchFormGate,
} from "./model";

export function SearchForm() {
  useGate(searchFormGate);
  const search = useStore($search);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchButtonClicked();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    searchChanged(event.target.value);
  };

  return (
    <Container>
      <Typography gutterBottom variant="h4">
        Поиск дешевых авиабилетов:
      </Typography>
      <FlexFormContainer onSubmit={handleSubmit}>
        <TextField
          inputProps={{ maxLength: 100 }}
          sx={{ flexGrow: 1 }}
          size="small"
          name="searchText"
          label="Search text"
          variant="outlined"
          value={search}
          onChange={handleChange}
        />
        <Button
          size="small"
          type="submit"
          variant="contained"
          sx={{
            alignSelf: "stretch",
          }}
          disabled={!search}
        >
          Search
        </Button>
      </FlexFormContainer>
      <FiltersBar />
      <ResultsList />
    </Container>
  );
}
