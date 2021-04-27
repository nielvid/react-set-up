import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../common/Sidebar";

export default function PrivateRoute({ children }) {
  return (
    <>
      <Flex>
        <Box background="green" width="15%" height="100vh">
          {" "}
          <Sidebar />
        </Box>

        <Box width="85%">{children}</Box>
      </Flex>
    </>
  );
}
