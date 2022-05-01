import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { FilterCheckboxProps } from "./types";
import { useStore } from "effector-react";

export function FilterCheckbox({ label, filter }: FilterCheckboxProps) {
  const active = useStore(filter.$active);
  const disabled = useStore(filter.$disabled);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (isChecked) return filter.activate({ ctx: "result_page" });
    filter.deactivate({ ctx: "result_page" });
  };

  return (
    <FormControlLabel
      checked={active}
      disabled={disabled}
      control={<Checkbox onChange={handleChange} />}
      label={label}
    />
  );
}
