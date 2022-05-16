import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function ClearField({ control, errors, name, remove, id }) {
  return (
 
      <Controller
        rules={{ required: "Oбязательно для заполнения" }}
        name={name }
        control={control}
        defaultValue=""
        className="materialUIInput"
        render={({ field }) => (
          <TextField
            id="outlined-textarea"
            label={name}
            onChange={(e) => field.onChange(e)}
            value={field.value || ""}
            error={!!errors[name ]?.message}
            helperText={errors[name ]?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={(e) => remove(id)}>
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
    
  );
}

export default ClearField;
