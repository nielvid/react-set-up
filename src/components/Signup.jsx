import React, { useState } from "react";

import {
  FormControl,
  FormLabel,
  Box,
  Flex,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import TextInput from "../common/TextInput";
import CommonBtn from "../common/CommonBtn";

export default function Signup() {
  const [state, setstate] = useState();
  const submit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(e.target.vale);
    setstate({
      firstname: e.target.value,
      lastname: e.target.value,
    });
  };
  return (
    <>
      <Box width="100%" margin="auto" textAlign="center" padding="4em 0">
        <Box width="100%" margin="2em auto" textAlign="center">
          <Box mb="4em">
            <Heading fontSize={["2rem", "3.5rem", "5rem"]} color="#572CD8">
              Welcome to Nielvid Bank
            </Heading>
            <Text fontSize={["1rem", "2rem", "3rem"]}>
              ...preserving your wealth for generations
            </Text>
          </Box>
          <Box m="2em 0">
            {" "}
            <Heading>Create Account Online</Heading>
          </Box>

          <Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              px="1em"
              flexWrap="wrap"
            >
              <Box
                border="2px solid blue"
                w={["100%", "50%", "30%"]}
                p="5em 1em"
                borderRadius="15px"
              >
                <Box m="2px auto">
                  <FormControl>
                    <TextInput
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      value={state}
                    />

                    <TextInput
                      type="password"
                      name="lastname"
                      placeholder="Last Name"
                      value={state}
                    />
                    <TextInput
                      type="text"
                      name="examp"
                      placeholder="Username"
                    />

                    <FormLabel>Date of Birth</FormLabel>
                    <TextInput type="date" name="exam" placeholder="" />
                    <TextInput type="text" name="exa" placeholder="Gender" />
                    <TextInput
                      type="password"
                      name="ex"
                      placeholder="Telephone Number"
                    />
                    <TextInput type="text" name="e" placeholder="Email" />
                    <TextInput
                      type="text"
                      name="ple"
                      placeholder="Residential Address"
                    />
                    <CommonBtn onClick={submit}>Signup</CommonBtn>
                  </FormControl>
                </Box>
              </Box>
            </Flex>
            <Text fontSize="1.8rem" fontWeight="500">
              Have an account? <Link href="/signup">Login</Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
