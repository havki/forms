import { TextField, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { textValidate } from "../Validation";

function Text({ control, errors }) {
  return (
    <div className="label">
      <Typography align="left" variant="subtitle1" gutterBottom component="div">
        Textarea
      </Typography>
      <Controller
        rules={textValidate}
        name="text"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            name="description"
            id="outlined-textarea"
            label="Textarea"
            minRows={4}
            multiline
            onChange={(e) => field.onChange(e)}
            value={field.value || ""}
            error={!!errors.text?.message}
            helperText={errors.text?.message}
          />
        )}
      />
    </div>
  );
}

export default Text;
