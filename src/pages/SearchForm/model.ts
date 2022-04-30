import {
  createStore,
  createEvent,
  createEffect,
  sample,
  forward,
} from "effector";
import { createGate } from "effector-react";

const searchFormGate = createGate();

const searchChanged = createEvent<string>();
const searchReset = createEvent();
const searchButtonClicked = createEvent();
const startSearchFx = createEffect<string, void, Error>({
  handler: (search: string) => {
    console.log("Поиск начался!", search);
  },
});

const $search = createStore("")
  .on(searchChanged, (_, newSearch) => newSearch)
  .reset(searchReset);

sample({ source: $search, target: startSearchFx, clock: searchButtonClicked });
forward({ from: startSearchFx, to: searchReset });

export { $search, searchChanged, searchButtonClicked, searchFormGate };
