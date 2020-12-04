import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Close from "@material-ui/icons/Close";
import Box from '@material-ui/core/Box';

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
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

class ApiTreeDisplay extends React.Component {
  constructor(props) {
    super(props);
    console.log("props:", this.props);
    this.state = {
      apiSpecs:[],
      loading:false,
      activeTab:this.props.operationIdx,
      allTabs:[...this.props.activeTabs],
      "operations":[
        'linked-instruments-check-eligibility',
        'register-linked-instrument',
        'deregister-linked-instrument',
        'linked-instruments-search-balances',
        'linked-instruments-reserve-balance',
        'linked-instruments-release-balance',
        'linked-instruments-credit-funds',
        'authorizations',
        'authorizations_id_capture',
        'authorizations_id_void',
        'void-authorization',
        'refund-authorizations', 
        'refund-authorizations_id_void',
        'void-refund-authorization',
        'refund-authorizations_id_capture',
        'linked-instruments-reverse-credits',
        'linked-instruments-refund',
        'linked-instruments-search-transactions',
        'linked-instruments-debit-funds',
        'cancel-linked-instruments-debit-funds'
      ],
      version:"1.1",
      title:"openwallet",
    }
  }

  componentDidMount = () => {
    this.loadApiSpec(this.state.activeTab);
  };

  handleChange = () => {
    console.log("change chip:", this.state.activeTab);
      this.loadApiSpec(this.state.activeTab);
    };

  deleteTab = (e) => {
    e.stopPropagation();
    // Case 2,3,4:
    let tabID = parseInt(e.target.id);
    let tabIDIndex = 0;
    
    let allTabs = this.state.allTabs.filter((value,index)=>{
        if(value === tabID){
            tabIDIndex = index;
        }
        return value !== tabID;
    });
    
    this.setState((state,props)=>{
        let curValue = parseInt(state.activeTab);
        if(curValue === tabID){
            // Case 3:
            if(tabIDIndex === 0){
                curValue = state.allTabs[tabIDIndex+1]
            }
            // Case 2:
            else{
                curValue = state.allTabs[tabIDIndex-1].id
            }
        }
        return {
            activeTab:curValue
        }
    },()=>{
        this.setState({
          allTabs:allTabs
        })
    });
  }

  loadApiSpec = async(newValue) => {
    const urlBase = 'http://localhost:4000/payments/json/getOperationPayload?';
    const title = this.state.title;
    const version = this.state.version;
    const operationId = this.state.operations[newValue];
    try {
      const response = await fetch(urlBase + `title=${encodeURIComponent(title)}&version=${encodeURIComponent(version)}&` +
                                  `operation=${encodeURIComponent(operationId)}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json =  await response.json();
      this.setState( state => {
        console.log("prev apispecs:", state.apiSpecs);
        const apiSpecs = state.apiSpecs.concat(json);
        return {
          activeTab: newValue,
          apiSpecs: apiSpecs,
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { classes } = this.props;

    if (this.state.loading) {
      return <div>Loading...</div>
    }
    if (this.state.apiSpecs.length === 0) {
      return <div>There aren't any matches !</div>
    }
    return (
      <div className="api-tree-view">
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.activeTab}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="on"
            aria-label="scrollable force tabs example"
          >
            {this.state.allTabs.map((itemNum) => (
              <Tab
                label={this.state.operations[itemNum]}
                {...a11yProps(itemNum)}
                icon={<Close id={itemNum} onClick={this.deleteTab} />}
              />
            ))}
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.activeTab} index={this.state.activeTab}>
          <Box
            display="flex"
            flexDirection="row"
            p={0}
            m={0}
            bgcolor="background.paper"
          >
            <Box p={0.5} bgcolor="grey.300">
              <ReactJson
                src={this.state.apiSpecs[0].data.request
                  .filter((obj) => obj.in.includes("body"))
                  .map((filteredObj) => filteredObj.schema)}
                name={this.state.apiSpecs.name}
                theme={"monokai"}
                iconStyle={"circle"}
                groupArraysAfterLength={100}
                indentWidth={3}
                collapsed={4}
                displayObjectSize={false}
                collapseStringsAfterLength={50}
                hideNameList={[
                  "x-pattern",
                  "minLength",
                  "maxLength",
                  "pattern",
                  "x-visibility",
                  "x-publicDocsSchemaName",
                  "minItems",
                  "maxItems",
                  "additionalProperties",
                ]}
                shouldCollapse={({ name }) =>
                  name === "x-pattern" || name === "enum" || name === "x-enum"
                }
                displayDataTypes={false}
              />
            </Box>
            <Box p={0.5} bgcolor="grey.300">
              <ReactJson
                src={this.state.apiSpecs[0].data.response.schema}
                name={this.state.apiSpecs.name}
                theme={"monokai"}
                iconStyle={"circle"}
                groupArraysAfterLength={100}
                indentWidth={3}
                collapsed={4}
                displayObjectSize={false}
                collapseStringsAfterLength={50}
                hideNameList={[
                  "x-pattern",
                  "minLength",
                  "maxLength",
                  "pattern",
                  "x-visibility",
                  "minItems",
                  "x-publicDocsSchemaName",
                  "maxItems",
                  "additionalProperties",
                ]}
                shouldCollapse={({ name }) =>
                  name === "x-pattern" || name === "enum" || name === "x-enum"
                }
                displayDataTypes={false}
              />
            </Box>
          </Box>
        </TabPanel>
      </div>
    );
  }
}

export default withStyles(useStyles)(ApiTreeDisplay);