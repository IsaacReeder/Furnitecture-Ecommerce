import React from "react";
import { GridLoader } from "react-spinners";
import { Box } from "gestalt";

const Loader = ({ show }) =>
  show && (
    <Box
      position="fixed"
      dangerouslySetInlineStyle={{
        __style: {
          bottom: 300,
          left: "50%",
          transform: "translateX(-50%)"
        }
      }}
    >
      <GridLoader color="darkorange" size={25} margin="3px" />
    </Box>
  );

export default Loader;
