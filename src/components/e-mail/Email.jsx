import { IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { emailValidate } from "../Validation";
import EmailIcon from "@mui/icons-material/Email";


function Email({ control, errors }) {
  return (
    <div className="label">
      <Typography align="left" variant="subtitle1" gutterBottom component="div">
        Input Field
      </Typography>

      <Controller
        rules={emailValidate}
        name="email"
        control={control}
        defaultValue=""
        className="materialUIInput"
        render={({ field }) => (
          <TextField
            name="name"
            id="outlined-textarea"
            label="Your email"
            onChange={(e) => field.onChange(e)}
            value={field.value || ""}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton >
                    <EmailIcon/>
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

export default Email;
