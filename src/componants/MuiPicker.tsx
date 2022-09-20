import React from "react";
import { Stack, TextField, TextFieldProps } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  //   console.log({
  //     selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  // //   });
  console.log({
    selectedDateTime,
  });
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="date-picker"
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
          <TextField {...params} />
        )}
        value={selectedDate}
        onChange={(newValue: React.SetStateAction<Date | null>) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="time-picker"
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
          <TextField {...params} />
        )}
        value={selectedTime}
        onChange={(newValue: React.SetStateAction<Date | null>) => {
          setSelectedTime(newValue);
        }}
      />
      <DateTimePicker
        label="date-time-picker"
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
          <TextField {...params} />
        )}
        value={selectedDateTime}
        onChange={(newValue: React.SetStateAction<Date | null>) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};
