import React from "react";

import TextField from "@material-ui/core/TextField";

/* eslint-disable */
const InputComponent = ({ inputRef, ...other }) => <div {...other} />;
const OutlinedDiv = ({ children, label }) => {
  return (
    <TextField
      fullWidth={true}
      variant="outlined"
      label={label}
      multiline
      InputLabelProps={{ shrink: true }}
      InputProps={{
        inputComponent: InputComponent,
      }}
      inputProps={{ children: children }}
    />
  );
};
export default OutlinedDiv;
