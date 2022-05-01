import React from "react";
import { Container } from "@mui/material";
import {
  onlyConvenientFlightsFilter,
  onlyFastFlightsFilter,
  noOvernightFlightsFilter,
} from "./filters";
import { FilterCheckbox } from "./FilterCheckbox";

export function FiltersBar() {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", mt: 1, gap: 1 }}
    >
      <FilterCheckbox
        filter={noOvernightFlightsFilter}
        label="Без ночных перелетов"
      />
      <FilterCheckbox
        filter={onlyConvenientFlightsFilter}
        label="Только удобные"
      />
      <FilterCheckbox filter={onlyFastFlightsFilter} label="Только быстрые" />
    </Container>
  );
}
