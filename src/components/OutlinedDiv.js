import React from "react";

import TextField from "@material-ui/core/TextField";

// const useStyles = (theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     "& > *": {
//       margin: theme.spacing(0.5),
//     },
//   },
// });

/* eslint-disable */
const InputComponent = ({ inputRef, ...other }) => <div style = {{display: "flex",justifyContent: "center",padding:"5 5 5 5"}} {...other} />;
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
