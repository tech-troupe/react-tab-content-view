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
import { ReactComponent as RefreshIcon } from "../assets/refresh.svg";
import LoadingSpinner from "./LoadingSpinner";

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
      if (this.props.defaultTitle !== 0) {
        return (
          <div>
            <h3>
              Oops! You closed all tabs!! Use &nbsp;
              <RefreshIcon style={{ width: 25 }} />
              (Refresh Icon) on top right corner of above title section to bring
              them back...
            </h3>
          </div>
        );
      } else {
        return <div></div>;
      }
    }

    let content = this.findObject(this.props.activeTab).content;
    if (content === undefined) {
      if (this.props.contentLoading) {
        return <LoadingSpinner loadingTitle={this.props.titleLoading} />;
      } else {
        return <div></div>;
      }
    }

    let hasSubTab = Array.isArray(content);
    let tabContent = "";
    if (!hasSubTab) {
      if (typeof content === "object") {
        const ContentDisplayComponent = this.props.contentDisplayComponent;
        tabContent = (
          <ContentDisplayComponent
            src={content}
            {...this.props.contentDisplayAttributes}
          />
        );
      } else {
        tabContent = renderHTML(content);
      }
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
          >
            {renderHTML(subcontent)}
          </TabPanel>
        );
      });
      tabContent = (
        <TabContext value={this.props.subTabValue.toString()}>
          <TabList onChange={this.handleChangeSubTab}>{subTabs}</TabList>
          {tabPanels}
        </TabContext>
      );
    }

    if (this.props.contentLoading) {
      tabContent = <LoadingSpinner loadingTitle={this.props.titleLoading} />;
    }

    let loadingTab = "";
    if (this.props.titleLoading !== "") {
      const idx = this.props.allTabs.length - 1;
      loadingTab = (
        <Tab
          label={this.props.titleLoading}
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
            {loadingTab}
          </Tabs>
        </AppBar>
        <Box p={1}>{tabContent}</Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("statetoprops:", state);
  return {
    allTabs: state.allTabs,
    activeTab: state.activeTitle,
    defaultTitle: state.defaultTitle,
    activeTabIndex: state.allTabs.indexOf(state.activeTitle),
    data: state.data,
    subTabValue: state.currentSubTabValue,
    contentLoading: state.contentLoading,
    titleLoading: state.titleLoading,
    contentDisplayComponent: state.contentDisplayComponent,
    contentDisplayAttributes: state.contentDisplayAttributes,
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
