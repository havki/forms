import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function NewFieldInput({ callback }) {
  const [value, setValue] = useState({name: ""});


  const createInput = (e) => {
    e.preventDefault()
    const newInput = {
      ...value,
      id: Date.now()
    }

    callback(newInput) //отдача родителю
    setValue({name: ""})
  }

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
        onChange={(e) => setValue({name: e.target.value})}
        
      />
      <Button
        size="small"
        sx={{ marginLeft: "50%", mt: "5px" }}
        variant="outlined"
        onClick={createInput}
      >
        Добавить поле
      </Button>
    </div>
  );
}

export default NewFieldInput;
