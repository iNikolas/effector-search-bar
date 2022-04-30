import React from "react";
import { useRoutes } from "react-router-dom";
import { routesMap } from "../routes";

export function App() {
  const routes = useRoutes(routesMap);
  return <>{routes}</>;
}
