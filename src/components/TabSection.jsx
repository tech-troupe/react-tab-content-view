import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Close from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";

import { closeTab, intializeState,switchTab } from "../stores/UserActions.js";

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = (theme) => ({
  // tree: {
  //   flexGrow: 1,
  //   width: '85vw',
  //   text-align: left,
  //   backgroundColor: theme.palette.background.paper,
  // },
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

  render() {
    const { classes } = this.props;

    if (this.props.activeTab === null) {
      return <div>Do Not Show Tabs</div>;
    }

    return (
      <div className="tab-section-container">
        <AppBar position="static" color="default">
          <Tabs
            value={this.props.activeTabIndex}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="on"
            aria-label="scrollable force tabs example"
          >
            {this.props.allTabs.map((title, idx) => (
              <Tab
                label={title}
                key={idx}
                {...a11yProps(idx)}
                icon={<Close id={idx} onClick={(e) => this.deleteTab(idx, e)} />}
              />
            ))}
          </Tabs>
        </AppBar>
        <TabPanel
          value={this.props.activeTab}
          index={this.props.activeTabIndex}
        >
          <Box
            display="flex"
            flexDirection="row"
            p={0}
            m={0}
            bgcolor="background.paper"
          >
            {this.props.data.filter((obj) => {
              console.log("obj.title:",obj.title, ":obj.content:",this.props.activeTab);
              if (obj.title === this.props.activeTab) {
                console.log("obj.title1:",obj.title, ":obj.content1:",this.props.activeTab);
                return (<div>
                          {obj.content} 
                      </div>)
              }
            })}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(TabSection));
