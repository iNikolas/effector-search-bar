import { styled } from "@mui/material/styles";
import { Container as MuiContainer } from "@mui/material";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: theme.spacing(100),
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: theme.spacing(8),
  alignItems: "center",
  justifyContent: "center",
}));
