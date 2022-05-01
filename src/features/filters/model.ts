import { createApi, createDomain } from "effector";
import { FilterParams } from "./types";
import { Result } from "../results";

export function createFilter(filterName: string, { isFit }: FilterParams) {
  const filterDomain = createDomain(filterName);

  const $active = filterDomain.createStore(false);
  const $disabled = filterDomain.createStore(false);

  const { activate, deactivate } = createApi($active, {
    activate: (_, _1: { ctx: string }) => true,
    deactivate: (_, _1: { ctx: string }) => false,
  });

  const { enable, disable } = createApi($disabled, {
    enable: () => false,
    disable: () => true,
  });

  $active.on(disable, () => false);

  function applyFilter(isActive: boolean, results: Result[]) {
    if (!isActive) return results;

    return results.filter((result) => isFit(result));
  }

  return {
    activate,
    deactivate,
    enable,
    disable,
    $active,
    $disabled,
    applyFilter,
  };
}

export type Filter = ReturnType<typeof createFilter>;
