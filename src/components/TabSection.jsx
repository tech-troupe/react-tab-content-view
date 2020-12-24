import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import TabList from "@material-ui/lab/TabList";
import { TabContext } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import Box from "@material-ui/core/Box";
import renderHTML from "react-render-html";
import compose from "recompose/compose";
import { ReactComponent as RefreshIcon } from "../../src/assets/refresh.svg";
import CustomizedProgressBars from "./Spinner";

import {
  closeTab,
  intializeState,
  switchTab,
  setSubTabValue,
} from "../stores/UserActions.js";

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

function TabPanel(props) {
  const { children, value, index, key, ...other } = props;

  return (
    <div
      key={key}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

class TabSection extends React.Component {
  handleChange = (e, idx) => {
    this.props.switchTab(this.props.activeTabIndex, idx);
  };

  handleChangeSubTab = (e, newSubTabValue) => {
    this.props.setSubTabValue(newSubTabValue);
  };

  deleteTab = (indx, e) => {
    e.stopPropagation();
    this.props.deleteTab(parseInt(indx));
  };

  findObject = (objId) =>
    this.props.data.find((item) => item.titleId === objId);

  render() {
    const { classes } = this.props;
    const subTabs = [];
    const tabPanels = [];

    if (this.props.allTabs.length === 0) {
      return (
        <div>
          <h3>
            Oops! You closed all tabs!! Don't worry! Use{" "}
            <RefreshIcon style={{ width: 25 }} />
            (Refresh Icon) on top right corner of above title section to bring
            them back...
          </h3>
        </div>
      );
    }
    let content = this.findObject(this.props.activeTab).content;

    if (content === undefined) {
      if (this.props.contentLoading) {
        return (
          <CustomizedProgressBars loadingTitle={this.props.titleLoading} />
        );
      } else {
        return <div></div>;
      }
    }

    let hasSubTab = typeof content === "string" ? false : true;

    let tabContent = "";

    if (!hasSubTab) {
      tabContent = renderHTML(content);
    } else {
      content.map((obj, idx) => {
        const { subtitle, subcontent } = obj;

        //add subtab to active tab
        subTabs.push(
          <Tab
            label={subtitle}
            value={idx.toString()}
            key={idx}
            {...a11yProps(idx)}
          />
        );

        //add content to active tab
        tabPanels.push(
          <TabPanel
            value={idx.toString()}
            index={this.props.subTabValue}
            key={idx}
            children={renderHTML(subcontent)}
          />
        );
      });
      tabContent = (
        <TabContext value={this.props.subTabValue.toString()}>
          <TabList onChange={this.handleChangeSubTab}>{subTabs}</TabList>
          {tabPanels}
        </TabContext>
      );
    }

    console.log("tabsection loading state:", this.props.contentLoading);
    if (this.props.contentLoading) {
      tabContent = (
        <CustomizedProgressBars loadingTitle={this.props.titleLoading} />
      );
    }

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.props.activeTabIndex}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            aria-label="scrollable force tabs example"
          >
            {this.props.allTabs.map((titleId, idx) => {
              let obj = this.findObject(titleId);
              return (
                <Tab
                  label={obj.title}
                  key={idx}
                  {...a11yProps(idx)}
                  icon={
                    <CancelIcon
                      id={idx}
                      color="primary"
                      style={{ fontSize: 20 }}
                      onClick={(e) => this.deleteTab(idx, e)}
                    />
                  }
                />
              );
            })}
          </Tabs>
        </AppBar>
        {tabContent}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("statetoprops:", state);

  return {
    allTabs: state.allTabs,
    activeTab: state.activeTitle,
    activeTabIndex: state.allTabs.indexOf(state.activeTitle),
    data: state.data,
    subTabValue: state.currentSubTabValue,
    contentLoading: state.contentLoading,
    titleLoading: state.titleLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("inside mapDispatchToProps");
  return {
    deleteTab: (indx) => dispatch(closeTab(indx)),
    intializeState: () => dispatch(intializeState()),
    switchTab: (prevIdx, newIdx) => dispatch(switchTab(prevIdx, newIdx)),
    setSubTabValue: (newIdx) => dispatch(setSubTabValue(newIdx)),
  };
};

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(TabSection);
