import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { components } from "./components/Components";
import { Controller, useForm } from "react-hook-form";
import Name from "./components/name/Name";
import Select from "./components/select/Select";
import { textValidate, dateValidate } from "./components/Validation";
import EmailIcon from "@mui/icons-material/Email";
import Email from "./components/e-mail/Email";
import BasicDatePicker from "./components/date/Date";
import CheckboxLabels from "./components/checkboxes/Checkbox";
import Text from "./components/text/Text";
import RowRadioButtonsGroup from "./components/radio/Radio";
import NewFieldInput from "./components/newFieldInput/NewFieldInput";
import { useState } from "react";
import ClearField from "./components/clearField/ClearField";

function App() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("sad");
  const [userInput, setUserInput] = useState([]);

  const createInput = (createInput) => {
    setUserInput([...userInput, createInput]);
  };

  const deleteInput = (id) => {
    let filtered = userInput.filter((input) => input.id !== id);
    console.log(filtered);
    setUserInput((userInput) => filtered);
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="App">
      <Container maxWidth="xl" disableGutters>
        {/* background.default */}
        <Box
          sx={{
            component: "form",
            bgcolor: "default.background",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            alignItems: "start",
            justifyContent: "center",
            padding: "30px 0",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack sx={{ margin: "0 auto" }} spacing={2}>
              <Name control={control} errors={errors} />
              <Email control={control} errors={errors} />
              <Select control={control} errors={errors} />
              <CheckboxLabels
                control={control}
                errors={errors}
                register={register}
              />
              <Text control={control} errors={errors} />
              <RowRadioButtonsGroup control={control} errors={errors} />
              <BasicDatePicker control={control} errors={errors} />

              {userInput.map((input) => {
                return (
                  <ClearField
                    remove={deleteInput}
                    control={control}
                    errors={errors}
                    name={input}
                    key={input.id}
                    id={input.id}
                  />
                );
              })}

              <NewFieldInput callback={createInput} create={setName} />
              <div className="label">
                <Button variant="outlined" type="submit" size="large">
                  Submit button
                </Button>
              </div>
            </Stack>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default App;
