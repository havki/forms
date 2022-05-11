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

function App() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();

  // var myDate = "Wed May 18 2022";
  // console.log(Date.parse(myDate));
// myDate = myDate.split("-");
// var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
// console.log(newDate.getTime());

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
              <CheckboxLabels control={control} errors={errors} register={register} />
              <Text control={control} errors={errors} />
              <RowRadioButtonsGroup control={control} errors={errors} />
              <BasicDatePicker control={control} errors={errors} />

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

// {["1", "2", "3"].map((item) => {
//   return (
//     <Controller
//       // rules={{ required: false }}
//       name={`cb${item}`}
//       control={control}
//       defaultValue={!!false}
//       className="materialUIInput"
//       render={({ field }) => (
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={field.value || ""}
//               onChange={(e) => field.onChange(e)}
//               defaultChecked
//             />
//           }
//           label="Label"
//         />
//       )}
//     />
//   );
// })}