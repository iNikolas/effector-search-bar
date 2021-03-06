import { addHours } from "date-fns";
import { combine, createEvent, createStore } from "effector";
import { Result } from ".";
import { noOvernightFlightsFilter, onlyConvenientFlightsFilter, onlyFastFlightsFilter } from "../filters";
import { flow } from "lodash";

export const writeToResults = createEvent();

const now = new Date();

export const $results = createStore<Result[]>([]).on(writeToResults, () => [
  {
    origin: "HKT",
    destination: "JFK",
    departure: addHours(now, 1),
    arrival: addHours(now, 17),
  },
  {
    origin: "HKT",
    destination: "LED",
    departure: addHours(now, 1),
    arrival: addHours(now, 10),
  },
  {
    origin: "MOW",
    destination: "LED",
    departure: addHours(now, 4),
    arrival: addHours(now, 6),
  },
  {
    origin: "MOW",
    destination: "ABA",
    departure: addHours(now, 6),
    arrival: addHours(now, 11),
  },
  {
    origin: "IKT",
    destination: "BKK",
    departure: addHours(now, 4),
    arrival: addHours(now, 10),
  },
  {
    origin: "HKT",
    destination: "BKK",
    departure: addHours(now, 3),
    arrival: addHours(now, 4),
  },
  {
    origin: "MOW",
    destination: "BKK",
    departure: addHours(now, 5),
    arrival: addHours(now, 12),
  },
  {
    origin: "LED",
    destination: "JFK",
    departure: addHours(now, 3),
    arrival: addHours(now, 16),
  },
  {
    origin: "JKF",
    destination: "ABA",
    departure: addHours(now, 5),
    arrival: addHours(now, 20),
  },
  {
    origin: "LED",
    destination: "JFK",
    departure: addHours(now, 3),
    arrival: addHours(now, 16),
  },
  {
    origin: "LED",
    destination: "IKT",
    departure: addHours(now, 3),
    arrival: addHours(now, 8),
  },
  {
    origin: "LED",
    destination: "MOW",
    departure: addHours(now, 1),
    arrival: addHours(now, 2),
  },
  {
    origin: "LED",
    destination: "HKT",
    departure: addHours(now, 5),
    arrival: addHours(now, 11),
  },
]);

export const $filteredFlights = combine(
  {
    results: $results,
    noOvernightFlightsActive: noOvernightFlightsFilter.$active,
    onlyConvenientFlightsActive: onlyConvenientFlightsFilter.$active,
    onlyFastFlightsActive: onlyFastFlightsFilter.$active,
  },
  ({
     results,
     noOvernightFlightsActive,
     onlyConvenientFlightsActive,
     onlyFastFlightsActive,
   }): Result[] =>
    flow([
      (results) =>
        noOvernightFlightsFilter.applyFilter(noOvernightFlightsActive, results),
      (results) =>
        onlyConvenientFlightsFilter.applyFilter(
          onlyConvenientFlightsActive,
          results
        ),
      (results) =>
        onlyFastFlightsFilter.applyFilter(onlyFastFlightsActive, results),
    ])(results)
);