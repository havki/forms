import "./App.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
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
import { current } from "@reduxjs/toolkit";

function App() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("sad");
  const [userInput, setUserInput] = useState([]);
  const [currentInput, setCurrentInput] = useState(null)

  const createInput = (createInput) => {
    setUserInput([...userInput, createInput]);
  };

  const deleteInput = (id) => {
    let filtered = userInput.filter((input) => input.id !== id);
    console.log(filtered);
    setUserInput((userInput) => filtered);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const dragStartHandler = (e,input) => {
    setCurrentInput(input)
    console.log('drag',input);
  }
  const dragLeaveHandler = (e) => {
    
  }
  const dragOverHandler = (e) => {
    e.preventDefault()
    
  }
  const dragEndHanler = () => {
    
  }
  const dropHandler = (e,input) => {
    e.preventDefault()
    console.log('drop',input);
    setUserInput(userInput.map(i => {
      if ( i.id === input.id ) {
        return {...i,id: currentInput.id}
      }
      if (i.id === currentInput.id ) {
        return {...i,id:input.id}
      }
      return i
    }))



  }

  const sortInputs = (a,b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className="App">
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            component: "form",
            bgcolor: "#F9FAFC",
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

              <div draggable={true}>asdasdasd</div>

              {userInput.sort(sortInputs).map((input) => {
                return (
                  <div
                    className="label added"
                    onDragStart={(e) => dragStartHandler(e,input)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragEnd={(e) => dragEndHanler(e)}
                    onDrop={(e) => dropHandler(e,input)}
                    draggable={true}
                    style={{ cursor: "grab" }}
                    key={input.id}
                  >
                    <Typography
                      align="left"
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                    >
                      Empty Field
                    </Typography>
                    <ClearField
                      draggable={true}
                      remove={deleteInput}
                      control={control}
                      errors={errors}
                      name={input}
                      id={input.id}
                    />
                  </div>
                );
              })}

              <NewFieldInput callback={createInput} create={setName} />
              <div className="label">
                <Button
                  variant="contained"
                  sx={{ borderRadius: "50px" }}
                  type="submit"
                  size="large"
                >
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
