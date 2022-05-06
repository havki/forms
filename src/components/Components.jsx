import EmailIcon from '@mui/icons-material/Email';import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  InputAdornment,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CheckboxLabels from "./checkboxes/Checkbox";
import ControlledCheckbox from "./checkboxes/Checkbox";
import "./Components.css";
import BasicDatePicker from './date/Date';
// import BasicDatePicker from "./date/Date";
import RowRadioButtonsGroup from "./radio/Radio";
import BasicSelect from "./select/Select";

const name = (
  <div className="label">
    <Typography align="left" variant="subtitle1" gutterBottom component="div" >
      Input Field
    </Typography>

    
    <TextField
      name="email"
      id="outlined-textarea"
      label="Your name"
      error= {false}
      // helperText= 'Заполните'
    />
  </div>
);

const email = (
  <div className="label">
    <Typography align="left" variant="subtitle1" gutterBottom component="div" >
      Input Field
    </Typography>

    <TextField
      name="email"
      id="outlined-textarea"
      label="Email"
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <EmailIcon />
          </InputAdornment>
        ),
      }}
      
    />
  </div>
);

const select = (
  <div className="label">
    <Typography align="left" variant="subtitle1" gutterBottom component="div">
      Select
    </Typography>
    <BasicSelect />
  </div>
);

const checkboxes = (
  <div className="label">
    <Typography align="left" variant="subtitle1" gutterBottom component="div">
      Checkbox
    </Typography>
    <div className="flex">
      <CheckboxLabels/>
      <CheckboxLabels/>

      <CheckboxLabels/>


    </div>
  </div>
);

const textField = (
  <div className="label">
     <Typography align="left" variant="subtitle1" gutterBottom component="div">
     Textarea
    </Typography>
    <TextField
      name="description"
      id="outlined-textarea"
      label="Textarea"
      minRows={4}
      multiline
    />
  </div>
);

const radio = (
  <div className="label">
     <Typography align="left" variant="subtitle1" gutterBottom component="div">
     Textarea
    </Typography>
    <RowRadioButtonsGroup/>

  </div>
)
const date = (
  <div className="label">
    <BasicDatePicker/>
  </div>
)
const button = (
  <div className="label">
    <Button variant="outlined" type='submit' size="large">
          Submit button
    </Button>
  </div>
)


export const components = [
  name,
  email,
  checkboxes,
  select,
  textField,
  radio,
  date,
  button,
  
];
