import { sample } from "effector";
import { sendDataToAnalytics } from "../analytics";
import { $filteredFlights } from "./results";

sample({
  source: $filteredFlights,
  target: sendDataToAnalytics,
  fn: (flights) => ({
    name: "filtered_flight_count",
    payload: { count: flights.length },
  }),
});
