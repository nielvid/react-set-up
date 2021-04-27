import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, List } from "@chakra-ui/react";
import { ReactComponent as MenuIcon } from "./menu.svg";

export default function Mobilemenu() {
  const [state, setstate] = useState();
  const Clicked = () => {
    setstate(!state);
  };

  return (
    <>
      <Box background="#572CD8" color="white" w="100%" p="1em 2em">
        <MenuIcon width="8%" onClick={Clicked} />

        <Box
          fontSize="1.5rem"
          d={state ? "none" : "block"}
          position="absolute"
          top="2.8em"
          left="0"
          width="85px"
          background="#572CD1"
          height="70vh"
          pl="1em"
          zIndex="3"
          opacity="0.9"
        >
          <List onClick={Clicked}>
            <Link to="/">Home</Link>
          </List>
          <List>
            <Link to="/signup" onClick={Clicked}>
              About
            </Link>
          </List>
          <List onClick={Clicked}>
            <Link to="/">Products</Link>
          </List>
          <List onClick={Clicked}>
            <Link to="/">Services</Link>
          </List>
          <List onClick={Clicked}>
            <Link to="/">SME</Link>
          </List>
          <List onClick={Clicked}>
            <Link to="/">Loan</Link>
          </List>
          <List onClick={Clicked}>
            <Link to="/">Accounts</Link>
          </List>
        </Box>
      </Box>
    </>
  );
}
