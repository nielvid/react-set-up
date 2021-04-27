import React from "react";
import { Box } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../img/logo.svg";

import CommonBtn from "../common/CommonBtn";

export default function Home() {
  return (
    <>
      <Box
        background="#572CD8"
        height="100vh"
        py={["70%", "50%", "30%", "22%"]}
        px="2rem"
      >
        <Box
          backgroundImage="url()"
          width="100%"
          display="flex"
          justifyContent="Center"
          alignItems="center"
        >
          <Logo />
          <Box
            color="white"
            fontSize={["1.3em", "2em", " 3em"]}
            fontWeight="500"
            ml="0.5em"
          >
            Nielvid Bank
          </Box>
        </Box>
        <Box
          background="#572CD8"
          display="flex"
          justifyContent="Center"
          alignItems="center"
          mt="6em"
        >
          {" "}
          <CommonBtn fontSize="1.3em" background="white" color="#572CD8">
            Get Started
          </CommonBtn>
        </Box>
      </Box>
    </>
  );
}
