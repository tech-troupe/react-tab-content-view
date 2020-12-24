import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#00e2ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Spinner(props) {
  const classes = useStylesFacebook();
  console.log("inside spinner!");

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "50px 0",
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  spinText: {
    fontFamily: "Roboto",
    fontSize: 14,
    margin: 5,
    fontWeight: "bold",
  },
});

export default function CustomizedProgressBars({ loadingTitle }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Spinner />
        <div>
          <Typography className={classes.spinText} variant="h3">
            {loadingTitle}
          </Typography>
        </div>
      </div>
    </div>
  );
}
