import React from "react";
import { useState } from "react";
import { Button } from "./styles/Button.styled";
import { Menu, MenuItem } from "./styles/Menu.styled";

type menu = {
  option?: any;
  menuOpen?: any;
  padding?: any;
  width?: any;
  fontFamily: any;
};

const Menulist = (props: menu) => {
  const [menuOpen, setMenuOpen]: any = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    setMenuOpen(!menuOpen);
    console.log(selectedOption);
  };
  return (
    <>
      <div>
        <Button onClick={handleMenuToggle}>Open Menu</Button>
        <Menu
          open={menuOpen}
          p={props.padding}
          w={props.width}
          fontFamily={props.fontFamily}
        >
          {props.option.map((option: any) => (
            <MenuItem onClick={onOptionClicked(option)} key={Math.random()}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
};
export default Menulist;
