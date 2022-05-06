import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <TextField
    id="outlined-select-currency"

    select
    label="Категория"
    name="kategorii"
   
  >
    {['1','2','3'].map((option) => (
      <MenuItem >
        {option}
      </MenuItem>
    ))}
  </TextField>
  );
}
