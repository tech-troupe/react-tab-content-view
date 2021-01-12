import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Box, FormControlLabel, Switch } from "@material-ui/core";
import TitleSection from "./TitleSection";
import TabSection from "./TabSection";
import RefreshIcon from "../images/Refresh";
import {
  refreshTitles,
  setInputProps,
  toggleGroup,
} from "../stores/UserActions.js";
import Tooltip from "@material-ui/core/Tooltip";

import "./TabContent.css";

export const TabContent = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInputProps(props));
  }, [props]);

  const showRefreshIcon = useSelector((state) => state.titleRefreshAll);
  const error = useSelector((state) => state.error);
  if (error) {
    return (
      <div className="error-message">
        <br />
        <br />
        Exception Occured - Cannot process the input.
        <br />
        {error}
      </div>
    );
  }

  let refreshIcon;
  if (showRefreshIcon) {
    refreshIcon = (
      <div className="refresh-icon" onClick={() => dispatch(refreshTitles())}>
        <Tooltip title="Refresh to display all titles" aria-label="refresh">
          <span>
            <RefreshIcon />
          </span>
        </Tooltip>
      </div>
    );
  }

  return (
    <div className="tab-content-container">
      <Box
        display="flex"
        flexDirection="row-reverse"
        p={0.5}
        m={0.5}
        bgcolor="background.paper"
      >
        <Box p={1}>
          <FormControlLabel
            control={
              <Switch
                checked={useSelector((state) => state.showGroup)}
                onChange={() => dispatch(toggleGroup())}
                name="checkedGroup"
                color="secondary"
                disabled={useSelector((state) => !state.hasGroup)}
              />
            }
            label="Group"
          />
        </Box>
        <Box p={1} m={0.5}>
          {refreshIcon}
        </Box>
      </Box>
      <Card className="title-container">
        <TitleSection />
      </Card>
      <Card className="tab-container">
        <TabSection />
      </Card>
    </div>
  );
};
