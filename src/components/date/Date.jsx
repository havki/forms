import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormHelperText, Typography } from "@mui/material";
import { dateValidate } from "../Validation";
import { Controller } from "react-hook-form";
import { DesktopDatePicker } from "@mui/x-date-pickers";

 function BasicDatePicker({ errors, control }) {
  const [value, setValue] = React.useState(null);
  

  return (
    <div className="label">
      <Typography align="left" variant="subtitle1" gutterBottom component="div">
        Date
      </Typography>
      <Controller
        rules={dateValidate}
        control={control}
        name="date"
        defaultValue=""
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Введите дату"
              value={field.value}
              onChange={(e) => field.onChange(e)}
              renderInput={(params) => 
              <TextField 
                {...params} 
                name="date"
                error= {!!errors.date?.message}
                
              />}
              inputFormat = "dd/MM/yyyy"
            />
            <FormHelperText sx={{ color: "red" }}>
              {errors.date?.message}
            </FormHelperText>
          </LocalizationProvider>
        )}
      />
    </div>
  );
}

export default BasicDatePicker

// (newValue) => {
//   setValue(newValue);
// }
