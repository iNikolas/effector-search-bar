import {
  createStore,
  createEvent,
  createEffect,
  sample,
  forward,
} from "effector";
import { createGate } from "effector-react";
import { writeToResults } from "../../features/results";

export const searchFormGate = createGate();

export const searchChanged = createEvent<string>();
const searchReset = createEvent();
export const searchButtonClicked = createEvent();
export const startSearchFx = createEffect({
  handler: (search: string) => {
    console.log("Поиск начался!", search);
  },
});

export const $search = createStore("")
  .on(searchChanged, (_, newSearch) => newSearch)
  .reset(searchReset);

sample({ source: $search, target: startSearchFx, clock: searchButtonClicked });
forward({ from: startSearchFx, to: [searchReset, writeToResults] });
