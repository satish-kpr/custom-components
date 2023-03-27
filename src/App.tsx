import React, { useState } from "react";
import { Select, SelectOption } from "./components/Tag/Select";
import "./App.css";
import { AlertDialog } from "./components/Alert";
import Menulist from "./components/Menu";
import { Button } from "./components/styles/Button.styled";
import {
  Container,
  Input,
  Label,
  RadioBox,
} from "./components/styles/Radio.styled";
import { Spinner } from "./components/spinner";
import { Slider, SliderWrapper } from "./components/styles/slider.styled";
import {
  SwitchContainer,
  SwitchInput,
  SwitchSlider,
} from "./components/styles/Switch.styled";
import { Text } from "./components/styles/Text.styled";
import { TextArea } from "./components/styles/Textarea.styled";
import { List, ListItem } from "./components/styles/List.styled";
import Divider from "./components/styles/divider.styled";

const App = () => {
  const option = ["Mangoes", "Apples", "Oranges"];
  const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Fifth", value: 5 },
  ];

  //Tag
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  const [sliderValue, setSliderValue] = useState(50);
  //switch state
  const [isChecked, setIsChecked] = useState(false);
  //switch function
  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };
  //Textarea
  const [value, setValue] = React.useState("");
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);
  //Textarea

  //Textarea functions
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleInvalidChange = (
    event: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    setIsInvalid(event.target.value === "");
  };
  //Textarea functions

  const handleSliderChange = (event: any) => {
    setSliderValue(event.target.value);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Spinner m={"5px"} />
        <Spinner borderColor="#ff0000" />
        <Spinner borderColor="#00ff00" />
        <Spinner borderColor="#0000ff" />
      </div>
      <div>
        <AlertDialog
          message="Are you sure want to delete ?"
          bg="#fff"
          spacing="2px"
          size="lg"
        />
        <Text size="xl" color="red" fontFamily="Poppins" letterSpacing="2px">
          Hello world
        </Text>
        <Text size="xl" color="black" fontFamily="Poppins" letterSpacing="2px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </Text>
        <Menulist
          padding="lg"
          width="lg"
          fontFamily="Poppins"
          option={option}
        />
        <div>
          <Container>
            <Label id="london" style={{ margin: "10px" }}>
              <Input type="radio" name="location" id="london" value="london" />
              <RadioBox
                bg={"red"}
                h={"12px"}
                border={"1px solid green"}
              ></RadioBox>
              <Text
                size="xl"
                color="blue"
                fontFamily="Poppins"
                letterSpacing="2px"
              >
                radio-button
              </Text>
            </Label>

            <Label id="berlin" style={{ margin: "10px" }}>
              <Input type="radio" name="location" id="berlin" value="berlin" />
              <RadioBox
                bg={"red"}
                h={"12px"}
                border={"1px solid green"}
              ></RadioBox>
              <Text size="xl" fontFamily="Poppins" letterSpacing="2px">
                radio-button
              </Text>
            </Label>

            <Label id="tokyo" style={{ margin: "10px" }}>
              <Input type="radio" name="location" id="tokyo" value="tokyo" />
              <RadioBox
                bg={"red"}
                h={"12px"}
                border={"1px solid green"}
              ></RadioBox>
              <Text
                size="xl"
                color="red"
                fontFamily="Poppins"
                letterSpacing="2px"
              >
                radio-button
              </Text>
            </Label>
          </Container>
        </div>
        <div>
          <SliderWrapper>
            <Slider
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
            />
            <div>{sliderValue}</div>
          </SliderWrapper>
        </div>

        <div style={{ display: "flex" }}>
          <label
            htmlFor="my-textarea"
            style={{
              padding: "10px",
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            Enter your message:
          </label>
          <TextArea
            p="md"
            fontSize="15"
            mh="110px"
            id="my-textarea"
            name="message"
            value={value}
            onChange={handleInputChange}
            onBlur={handleInvalidChange}
            isInvalid={isInvalid}
            isDisabled={isDisabled}
          />
          <Button p="10px" bg="gray" onClick={() => setIsDisabled(!isDisabled)}>
            Disable
          </Button>
        </div>
        <div style={{ display: "flex" }}>
          <Text
            size="xl"
            color="black"
            fontFamily="Poppins"
            letterSpacing="2px"
          >
            Switch:
          </Text>
          <div style={{ paddingLeft: "5px", paddingTop: "12px" }}>
            <SwitchContainer h="26px">
              <SwitchInput
                bgcolor={"green"}
                type="checkbox"
                checked={isChecked}
                onChange={handleSwitchChange}
              />
              <SwitchSlider bgcolor={"gray"} h="18px" w="20px" />
            </SwitchContainer>
          </div>
        </div>
        <div>
          <Text>list items</Text>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </List>
        </div>
        <div>
          <Select
            multiple
            options={options}
            value={value1}
            onChange={(o) => setValue1(o)}
          />
          <br />
          <Select
            options={options}
            value={value2}
            onChange={(o) => setValue2(o)}
          />
        </div>
        <div>
          <h1>My Title</h1>
          <Divider color="#bbb" thickness="3px" />
          <p>Some text here</p>
        </div>
      </div>
    </>
  );
};

export default App;
