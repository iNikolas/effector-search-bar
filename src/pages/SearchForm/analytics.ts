import { sample } from "effector";
import {
  sendDataToAnalytics,
  initializeAnalyticsFx,
} from "../../features/analytics";
import {
  searchChanged,
  searchButtonClicked,
  searchFormGate,
  $search,
} from "./model";

sample({
  clock: searchFormGate.open,
  target: [sendDataToAnalytics, initializeAnalyticsFx],
  fn: () => ({
    name: "search_form_shown",
    payload: {},
  }),
});

sample({
  clock: searchChanged,
  target: sendDataToAnalytics,
  fn: (search) => ({ name: "search_changed", payload: { search } }),
});

sample({
  clock: searchButtonClicked,
  source: $search,
  target: sendDataToAnalytics,
  fn: (search) => ({
    name: "search_button_clicked",
    payload: { search },
  }),
});
