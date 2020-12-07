import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CancelIcon from '@material-ui/icons/Cancel';
import Box from "@material-ui/core/Box";
import renderHTML from 'react-render-html';
import compose from 'recompose/compose';

import { closeTab, intializeState,switchTab } from "../stores/UserActions.js";

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
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
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

  deleteTab = (indx,e) => {
    e.stopPropagation();
    console.log("deleteTab:",indx);
    // console.log("deleteEvent:",e);
    this.props.deleteTab(parseInt(indx));
  };

  findObject = (objId) =>
    this.props.data.find(item => item.titleId === objId)

  render() {
    const { classes } = this.props;

    if (this.props.allTabs.length === 0) {
      return <div>Do Not Show Tabs</div>;
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
              return <Tab
                label={obj.title}
                key={idx}
                {...a11yProps(idx)}
                icon={<CancelIcon id={idx} color="primary" style={{ fontSize: 20 }} onClick={(e) => this.deleteTab(idx, e)}/>}
              />
            })}
          </Tabs>
        </AppBar>
        <TabPanel
          value={this.props.activeTabIndex}
          index={this.props.activeTabIndex}
        >
          <Box
            display="flex"
            flexDirection="row"
            p={0}
            m={0}
            bgcolor="background.paper"
          >
          {
            renderHTML(this.findObject(this.props.activeTab).content)
          }
          </Box>
        </TabPanel>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("inside mapDispatchToProps");
  return {
    deleteTab: (indx) => dispatch(closeTab(indx)),
    intializeState: () => dispatch(intializeState()),
    switchTab: (prevIdx, newIdx) => dispatch(switchTab(prevIdx, newIdx))
  }
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(useStyles)(TabSection));

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps,mapDispatchToProps),
)(TabSection);
