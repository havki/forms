import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import { selectValidate } from '../Validation';

export default function BasicSelect({errors,control}) {
 

  return (
    <div className="label">
    <Typography
      align="left"
      variant="subtitle1"
      gutterBottom
      component="div"
    >
      Select
    </Typography>

    <Controller
      rules={selectValidate}
      name="select"
      control={control}
      defaultValue=""
      className="materialUIInput"
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={field.value || ""}
            label="Age"
            onChange={(e) => field.onChange(e)}
            error={!!errors.select?.message}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          {errors.select && (
            <FormHelperText sx={{ color: "red" }}>
              {errors.select?.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  </div>
  );
}
