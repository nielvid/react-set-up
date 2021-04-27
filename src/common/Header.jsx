import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, List } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../img/logo.svg";

export default function Header() {
  const [state, setstate] = useState();
  const Clicked = () => {
    setstate(!state);
  };
  return (
    <>
      <Box background="#572CD8" color="white" w="100%" p="1em 3em">
        <Flex justifyContent="space-between" w="100%" alignItems="center">
          <Box>
            <Logo width="70%" />
          </Box>
          <Flex fontSize="2rem">
            <List pr="2em" onClick={Clicked}>
              <Link to="/">Home</Link>
            </List>
            <List pr="2rem" onClick={Clicked}>
              <Link to="/signup">About</Link>
            </List>
            <List pr="2rem" onClick={Clicked}>
              <Link to="/">Products</Link>
            </List>
            <List pr="2rem" onClick={Clicked}>
              <Link to="/">Services</Link>
            </List>
            <List pr="2rem" onClick={Clicked}>
              <Link to="/">SME</Link>
            </List>
            <List pr="2rem" onClick={Clicked}>
              <Link to="/">Loan</Link>
            </List>
            <List pr="3em" onClick={Clicked}>
              <Link to="/">Accounts</Link>
            </List>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
