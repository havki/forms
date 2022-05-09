import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormHelperText } from "@mui/material";

export default function BasicDatePicker({ errors, field }) {
  const [value, setValue] = React.useState(null);
  // const {} = field
  console.log(errors);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Введите дату"
        value={field.value}
        onChange={(e) => field.onChange(e)}
        renderInput={(params) => <TextField {...params} />}
      />
      <FormHelperText sx= {{color:'red'}}>{errors.date?.message}</FormHelperText>
    </LocalizationProvider>
  );
}

// (newValue) => {
//   setValue(newValue);
// }
