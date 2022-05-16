import { Button, FormHelperText, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function NewFieldInput({ callback, arr }) {
  const [value, setValue] = useState({ name: "" });
  const [error, setError] = useState(false)

  const createInput = (e) => {
    e.preventDefault();
    const newInput = {
      ...value,
      id: Date.now(),
    };
    let confirm = true;
    arr.forEach((item) => {
      if (arr.length >= 1 && (item.name === value.name) || value.name==="") {
        confirm = false;
      }
    });
    if (confirm === true) {
      callback(newInput); //отдача родителю
      setError(false)
    }
    else{
      setError(true)
    }

    setValue({ name: "" });
  };

  return (
    <div className="label">
      <Typography align="left" variant="subtitle1" gutterBottom component="div">
        Input Field
      </Typography>

      <TextField
        name="field"
        id="outlined-textarea"
        label="Название поля"
        value={value.name}
        onChange={(e) => setValue({ name: e.target.value })}
        error={error}
      />
      {error ? 
      <Stack mt={1} direction='row' alignItems='center' justifyContent='space-around' spacing={2}>

      <FormHelperText sx={{ color: "#D32F2F" }}>
        Такое поле уже есть
      </FormHelperText>
      <Button
        size="small"
        
        variant="outlined"
        onClick={createInput}
      >
        Добавить поле
      </Button>
      </Stack>
      
    :
    <Button
    size="small"
    sx={{ marginLeft: "50%", mt: "5px" }}
    variant="outlined"
    onClick={createInput}
  >
    Добавить поле
  </Button>

    }
    </div>
  );
}

export default NewFieldInput;
