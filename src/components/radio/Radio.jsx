import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormHelperText, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function RowRadioButtonsGroup({control,errors}) {
  return (
    <div className="label">
    <Typography
      align="left"
      variant="subtitle1"
      gutterBottom
      component="div"
    >
      Radio
    </Typography>
    <Controller
      rules={{ required: "Выберите что-то" }}
      name="radioGroup"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl
          error={!!errors.radioGroup?.message}
          variant="standard"
        >
          <FormLabel
            sx={{ textAlign: "left" }}
            id="demo-error-radios"
          >
            Ваш пол
          </FormLabel>
          <RadioGroup
            
            sx= {{flexDirection:"row",display:'flex',justifyContent:"space-around"}}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={field.value}
            onChange={(e) => field.onChange(e)}
          >
            <FormControlLabel
              value="Label 1"
              control={<Radio />}
              label="Label 1"
            />
            <FormControlLabel
              value="Label 2"
              control={<Radio />}
              label="Label 2"
            />
            <FormControlLabel
              value="Label 3"
              control={<Radio />}
              label="Label 3"
            />
          </RadioGroup>
          {errors.radioGroup && (
            <FormHelperText>
              {errors.radioGroup?.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  </div>
  );
}
