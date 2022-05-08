import { TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';

function Name(field) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm;
  return (
    <TextField
    name="name"
    id="outlined-textarea"
    label="Your name"
    onChange={(e) => field.onChange(e)}
    value={field.value || ""}
    error={!!errors.firstName?.message}
    helperText={errors.firstName?.message}
  />
  )
}

export default Name