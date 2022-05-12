import { TextField, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { nameValidate } from "../Validation";

function Name({ control, errors }) {
  return (
    <div className="label">
      <Typography align="left" variant="subtitle1" gutterBottom component="div">
        Input Field
      </Typography>

      <Controller
        rules={nameValidate}
        name="firstName"
        control={control}
        defaultValue=""
        className="materialUIInput"
        render={({ field }) => (
          <TextField
            name="name"
            id="outlined-textarea"
            label="Your name"
            onChange={(e) => field.onChange(e)}
            value={field.value || ""}
            error={!!errors.firstName?.message}
            helperText={errors.firstName?.message}
          />
        )}
      />
    </div>
  );
}

export default Name;
