import { Filter } from "./model";
import { Result } from "../results";

export interface FilterCheckboxProps {
  filter: Filter;
  label: string;
}

export interface FilterParams {
  isFit(result: Result): boolean;
}
