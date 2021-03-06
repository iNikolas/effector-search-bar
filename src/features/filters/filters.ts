import { createFilter } from "./model";
import { split } from "effector";
import { not } from "../../shared";
import { differenceInHours, getHours, isSameDay } from "date-fns";

export const noOvernightFlightsFilter = createFilter(
  "noOvernightFlightsFilter",
  {
    isFit: (result) => {
      const sameDay = isSameDay(result.arrival, result.departure);
      const departureAfterMorningStart = getHours(result.departure) >= 8;
      return sameDay && departureAfterMorningStart;
    },
  }
);
export const onlyConvenientFlightsFilter = createFilter(
  "onlyConvenientFlightsFilter",
  { isFit: (result) => isSameDay(result.arrival, result.departure) }
);
export const onlyFastFlightsFilter = createFilter("onlyFastFlightsFilter", {
  isFit: (result) => differenceInHours(result.arrival, result.departure) < 6,
});

split({
  source: noOvernightFlightsFilter.$active,
  match: {
    active: noOvernightFlightsFilter.$active,
    inactive: not,
  },
  cases: {
    active: onlyConvenientFlightsFilter.disable,
    inactive: onlyConvenientFlightsFilter.enable,
  },
});
