import { styled } from "@mui/material/styles";

export const FlexFormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  gap: theme.spacing(1),
  alignItems: "center",
}));
