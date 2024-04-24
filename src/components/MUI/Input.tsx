import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

const MUIInput = (props: TextFieldProps) => {
  const { InputProps, ...rest } = props;
  return (
    <TextField
      InputProps={{
        style: {
          border: "solid 1px #E0E5ED",
          borderRadius: "12px",
          color: "#292C38",
          ...InputProps?.style,
        },
        ...InputProps,
      }}
      {...rest}
    />
  );
};

export default MUIInput;
