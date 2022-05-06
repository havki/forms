import { TextField } from '@mui/material'
import React from 'react'

function Name() {
  return (
    <TextField
    name="email"
    id="outlined-textarea"
    label="Your name"
    error= {false}
    // helperText= 'Заполните'
  />
  )
}

export default Name