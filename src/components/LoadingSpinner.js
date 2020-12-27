import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import CircularProgress from "@material-ui/core/CircularProgress";
import { cancelLoading } from "../stores/UserActions.js";

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    position: "absolute",
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
}));

function Spinner(props) {
  const dispatch = useDispatch();
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
        <IconButton onClick={() => dispatch(cancelLoading())}>
          <CancelIcon
            color="primary"
            style={{ fontSize: 20 }}
          />

        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={40}
          thickness={4}
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
      </IconButton>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    padding: "50px 0",
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

export default function LoadingSpinner({ loadingTitle }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Spinner />
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            className={classes.spinText}
            variant="caption"
            component="div"
            color="textSecondary"
          >
            Loading {loadingTitle}...
          </Typography>
        </Box>
      </div>
    </div>
  );
}
