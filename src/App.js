import "./App.css";
import { Box, Button, Container, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Name from "./components/name/Name";
import Select from "./components/select/Select";
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
      <Container  maxWidth="xl" disableGutters>
        <Box
          sx={{
            component: "form",
            bgcolor: '#F9FAFC',
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
                <Button variant="contained" sx={{borderRadius:'50px'}} type="submit" size="large">
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
