import React, { useState } from "react";
import { AlertFunction, Alertfooter } from "./styles/Alert.styled";
import { Button } from "./styles/Button.styled";
import { Text } from "./styles/Text.styled";

type alerts = {
  size?: any;
  message?: any;
  fontFamily?: any;
  fontWeight?: any;
  m?: any;
  spacing?: any;
  bg?: any;
  padding?: any;
};
export const AlertDialog = (props: alerts) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Pop-Up</Button>
      {isOpen && (
        <AlertFunction size="lg">
          <Alertfooter size="lg">
            <div>
              <Text fontFamily={props.fontFamily} fontWeight="600" m="30px">
                {props.message}
              </Text>
            </div>
            <div style={{ paddingLeft: "35px" }}>
              <Button
                onClick={() => setIsOpen(false)}
                font-size="1rem"
                bg="#EDF2F7"
                size="md"
                spacing={props.spacing}
                p="20px"
                m="15px"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                bg="#c91818"
                size="md"
                color="white"
                spacing={props.spacing}
                font-size="1rem"
                p="20px"
                m="15px"
              >
                Delete
              </Button>
            </div>
          </Alertfooter>
        </AlertFunction>
      )}
    </>
  );
};
