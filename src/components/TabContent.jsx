import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import TitleSection from "./TitleSection";
import TabSection from "./TabSection";
import RefreshIcon from "../images/Refresh";
import { refreshTitles, setInputProps } from "../stores/UserActions.js";
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
      {refreshIcon}
      <Card className="title-container">
        <TitleSection />
      </Card>
      <Card className="tab-container">
        <TabSection />
      </Card>
    </div>
  );
};
