import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { formatInterval } from "../../shared";
import { Result } from "./types";

export function ListItemCustom({
  origin,
  destination,
  departure,
  arrival,
}: Result) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={`из ${origin} в ${destination}`}
        secondary={`${formatInterval({
          start: departure,
          end: arrival,
        })}`}
      />
    </ListItem>
  );
}
