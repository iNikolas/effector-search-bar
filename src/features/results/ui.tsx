import React from "react";
import { List } from "@mui/material";
import { useList } from "effector-react";
import { ListItemCustom } from "./ListItemCustom";
import { $filteredFlights } from "./results";

export function ResultsList() {
  const list = useList($filteredFlights, (result) => (
    <ListItemCustom
      origin={result.origin}
      destination={result.destination}
      departure={result.departure}
      arrival={result.arrival}
    />
  ));

  return (
    <List
      sx={{
        bgcolor: "background.paper",
        maxWidth: (theme) => theme.spacing(100),
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: (theme) => theme.spacing(4),
        height: (theme) => `calc(100vh - ${theme.spacing(33)})`,
        overflowY: "auto",
      }}
    >
      {list}
    </List>
  );
}
