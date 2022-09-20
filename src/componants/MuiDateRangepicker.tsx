import React from "react";
import { DateRange, DateRangePicker } from "@mui/lab";
import { Box, TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";
export const MuiDateRangepicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log({ value });
  return (
    <Box width="500px">
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue: React.SetStateAction<DateRange<Date>>) => {
          setValue(newValue);
        }}
        renderInput={(
          startProps: JSX.IntrinsicAttributes & TextFieldProps,
          endProps: JSX.IntrinsicAttributes & TextFieldProps
        ) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}>to</Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
};
