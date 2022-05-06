import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
     
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Label 1" control={<Radio />} label="Label 1" />
        <FormControlLabel value="Label 2" control={<Radio />} label="Label 2" />
        <FormControlLabel value="Label 3" control={<Radio />} label="Label 2" />
      </RadioGroup>
    </FormControl>
  );
}
