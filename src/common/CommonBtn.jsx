import React from "react";
import { Button } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function CommonBtn({
  fontSize,
  color,
  background,
  padding,
  children,
}) {
  return (
    <>
      <Button
        background={background}
        color={color}
        fontSize={fontSize}
        px="5em"
        padding={padding}
      >
        {children}
      </Button>
    </>
  );
}

Button.defaultProps = {
  background: "#572CD8",
  color: "white",
};
