import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function ClearField({ control, errors, name ,remove,id}) {
  
  return (
    <div className="label">
      <Typography align="left" variant="subtitle1" gutterBottom component="div">
        Input Field
      </Typography>

      <Controller
        rules={{ required: "обязательно для заполнения" }}
        name={name.name + name.id}
        control={control}
        defaultValue=""
        className="materialUIInput"
        render={({ field }) => (
          <TextField
            // name={name.name}
            id="outlined-textarea"
            label={name.name}
            onChange={(e) => field.onChange(e)}
            value={field.value || ""}
            error={!!errors[name.name + name.id]?.message}
            helperText={errors[name.name + name.id]?.message}

            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={(e)=>remove(id)}>
                    <DeleteForeverOutlinedIcon
                      fontSize="large"
                      sx={{ color: "#D32F2F" }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

export default ClearField;

