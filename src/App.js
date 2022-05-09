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
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { components } from "./components/Components";
import { Controller, useForm } from "react-hook-form";
import Name from "./components/name/Name";
import {
  nameValidate,
  emailValidate,
  selectValidate,
  textValidate,
  dateValidate,
} from "./components/Validation";
import EmailIcon from "@mui/icons-material/Email";
import BasicDatePicker from "./components/date/Date";

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  console.log(errors);
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
              <div className="label">
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
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

              <div className="label">
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
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
                    />
                  )}
                />
              </div>

              <div className="label">
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  Select
                </Typography>

                <Controller
                  rules={selectValidate}
                  name="select"
                  control={control}
                  defaultValue=""
                  className="materialUIInput"
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={field.value || ""}
                        label="Age"
                        onChange={(e) => field.onChange(e)}
                        error={!!errors.select?.message}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      {errors.select && (
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.select?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  )}
                />
              </div>

              <div className="label">
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  Checkbox
                </Typography>

                <FormControl error={true}>
                  <FormLabel sx={{ textAlign: "left" }} component="legend">
                    Дополнительно
                  </FormLabel>
                  <FormGroup row>
                    {["1", "2", "3"].map((item) => {
                      return (
                        <Controller
                          // rules={{ required: false }}
                          name={`cb${item}`}
                          control={control}
                          defaultValue={!!false}
                          className="materialUIInput"
                          render={({ field }) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={field.value || ""}
                                  onChange={(e) => field.onChange(e)}
                                  defaultChecked
                                />
                              }
                              label="Label"
                            />
                          )}
                        />
                      );
                    })}
                  </FormGroup>

                  <FormHelperText>Выберите два</FormHelperText>
                </FormControl>
              </div>

              <div className="label">
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
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
              <div className="label">
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  Radio
                </Typography>
                <Controller
                  rules={{ required: "Выберите что-то" }}
                  name="radioGroup"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl
                      error={!!errors.radioGroup?.message}
                      variant="standard"
                    >
                      <FormLabel
                        sx={{ textAlign: "left" }}
                        id="demo-error-radios"
                      >
                        Ваш пол
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={field.value}
                        onChange={(e) => field.onChange(e)}
                      >
                        <FormControlLabel
                          value="Label 1"
                          control={<Radio />}
                          label="Label 1"
                        />
                        <FormControlLabel
                          value="Label 2"
                          control={<Radio />}
                          label="Label 2"
                        />
                        <FormControlLabel
                          value="Label 3"
                          control={<Radio />}
                          label="Label 3"
                        />
                      </RadioGroup>
                      {errors.radioGroup && (
                        <FormHelperText>
                          {errors.radioGroup?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  )}
                />
              </div>
              <div className="label">
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  Date
                </Typography>
                <Controller
                  rules={dateValidate}
                  control={control}
                  name="date"
                  defaultValue=""
                  render={({ field }) => <BasicDatePicker field={field} errors={errors} />}
                />
              </div>

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

// {
//   /* <Grid container direction="column" justifyContent="space-evenly" alignItems="center" spacing={1}>
//  {components.map((item) => {
//    return (
//      <Grid item xs= {12} >
//        {item}
//      </Grid>
//    );
//  })}
// </Grid> */
// }

// {components.map((item) => {
//   return (
//    <>
//       {item}

//    </>
//   );
// })}

// <Controller
//   rules={{ required: "Выберите что-то" }}
//   name="checkbox"
//   control={control}
//   defaultValue=""
//   render={({ field }) => (
//     <FormControl
//       error={!!errors.radioGroup?.message}
//       variant="standard"
//     >
//       <FormLabel
//         sx={{ textAlign: "left" }}
//         id="demo-error-radios"
//       >
//         Ваш пол
//       </FormLabel>
//       <FormGroup
//         row
//         aria-labelledby="demo-row-radio-buttons-group-label"
//         name="row-radio-buttons-group"
//         value={field.value}
//         onChange={(e) => field.onChange(e)}
//       >
//         <FormControlLabel
//           value="Label 1"
//           control={<Radio />}
//           label="Label 1"
//         />
//         <FormControlLabel
//           value="Label 2"
//           control={<Radio />}
//           label="Label 2"
//         />
//         <FormControlLabel
//           value="Label 3"
//           control={<Radio />}
//           label="Label 3"
//         />
//       </FormGroup>
//       {errors.radioGroup && (
//         <FormHelperText>
//           {errors.radioGroup?.message}
//         </FormHelperText>
//       )}
//     </FormControl>
//   )}
// />
