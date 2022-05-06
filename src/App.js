import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { components } from "./components/Components";
import { Controller, useForm } from "react-hook-form";
import Name from "./components/name/Name";
import { nameValidate } from "./components/Validation";

function App() {
  const { control, handleSubmit,formState:{errors} } = useForm();

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
                  rules= {nameValidate}
                  render={({ field }) => (
                    <TextField
                      name="email"
                      id="outlined-textarea"
                      label="Your name"
                      onChange= {(e)=>field.onChange(e)}
                      value = {field.value || ""}
                      error =  {!!errors.firstName?.message}
                      helperText= {errors.firstName?.message}
                    />
                  )}
                  name="firstName"
                  control={control}
                  defaultValue=""
                  className="materialUIInput"
                />
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
