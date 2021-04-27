import React from "react";
import { Box } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function PageWrapper({ children }) {
  return (
    <>
      <Box width="100%">{children}</Box>
    </>
  );
}
