import { sendDataToAnalytics } from "../analytics";
import {
  onlyFastFlightsFilter,
  onlyConvenientFlightsFilter,
  noOvernightFlightsFilter,
} from "./filters";
import { sample } from "effector";

const filters = {
  onlyFastFlightsFilter,
  onlyConvenientFlightsFilter,
  noOvernightFlightsFilter,
};

Object.entries(filters).forEach(([name, filter]) => {
  sample({
    source: filter.activate,
    fn: ({ ctx }) => ({ name: `${name}_activated`, payload: { ctx } }),
    target: sendDataToAnalytics,
  });

  sample({
    source: filter.deactivate,
    fn: ({ ctx }) => ({ name: `${name}_deactivated`, payload: { ctx } }),
    target: sendDataToAnalytics,
  });
});
