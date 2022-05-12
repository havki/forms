import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Typography,
} from "@mui/material";
import { cbValidate } from "../Validation";

export default function CheckboxLabels({
  control,
  errors,
  register,
}) {
  


  return (
    <div className="label">
      <Typography align="left" variant="subtitle1" gutterBottom component="div">
        Checkbox
      </Typography>

      <Controller
      rules= {cbValidate}
      name= "checkbox"
      control = {control}
      defaultValue={[]}
      render=  {({field})=>(
      <FormControl error={!!errors.checkbox?.message}>
        <FormLabel sx={{ textAlign: "left" }} component="legend">
          Дополнительно
        </FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox {...register("checkbox")} value={"1"} />}
            label="Первый"
          />
          <FormControlLabel
            control={<Checkbox {...register("checkbox")} value={"2"} />}
            label="Второй"
          />
          <FormControlLabel
            control={<Checkbox {...register("checkbox")} value={"3"} />}
            label="Третий"
          />
        </FormGroup>
        {
          errors.checkbox &&
        <FormHelperText>{errors.checkbox.message}</FormHelperText>
        }
      </FormControl>
        
      )}
      />
    </div>
  );
}
