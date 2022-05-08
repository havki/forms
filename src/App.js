import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
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
} from "./components/Validation";
import EmailIcon from "@mui/icons-material/Email";

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
                <div className="flex">
                  <FormGroup row>
                    {
                      ['1','2','3'].map((item)=>{
                        return(

                          <Controller
                            rules={{ required: false }}
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

                        )

                      })


                    }
                   
                   
                  </FormGroup>
                </div>
              </div>

              <button type="submit">asd</button>
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
