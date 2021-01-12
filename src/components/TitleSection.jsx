import React from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { Card, Grid, Paper } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import PropTypes from "prop-types";
import OutlinedDiv from "./OutlinedDiv";

import {
  deleteTitle,
  intialize,
  clickTitle,
  callbackWatcher,
} from "../stores/UserActions";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    display: "grid",
    flex: "1 0 auto",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  chips: {
    display: "flex",
    flexDirection: "row",
    flexShrink: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
});

class TitleSection extends React.Component {
  handleClick = (id) => {
    if (!this.props.advancedMode) {
      this.props.clickTitle(id);
    } else {
      this.checkAndLoadContent(id);
    }
  };

  checkAndLoadContent = (id) => {
    if (id) {
      const activeTitleObject = this.findObject(id);
      if (activeTitleObject.content) {
        this.props.clickTitle(id);
      } else {
        this.props.callbackWatcherSaga(
          id,
          activeTitleObject.title,
          this.props.callbackFn
        );
      }
    }
  };

  componentDidUpdate = () => {
    if (
      this.props.activeTitle !== 0 &&
      !this.props.allTabs.includes(this.props.activeTitle) &&
      this.props.contentLoading === false
    ) {
      this.checkAndLoadContent(this.props.activeTitle);
    }
  };

  handleDelete = (id, e) => {
    e.stopPropagation();
    this.props.deleteTitle(id);
  };

  findObject = (objId) =>
    this.props.data.find((item) => item.titleId === objId);

  createDisplayObjectGroup = (grpName, titles) => {
    // Filter titleID not in displayed titles
    const filteredTitles = titles.filter((titleId) =>
      this.props.displayedTitles.includes(titleId)
    );

    let chipsList = [];
    if (this.props.showGroup && grpName !== "NoGroup") {
      chipsList = filteredTitles.map((titleId) => {
        let obj = this.findObject(titleId);
        let variantValue =
          obj.titleId === this.props.activeTitle ? "default" : "outlined";
        return this.onBadgeEnable(obj, variantValue);
      });
      return chipsList.length > 0 ? (
        <Grid item xs={6} justify="space-evenly">
          <OutlinedDiv label={grpName}>
            <div className={this.props.classes.chips}>{chipsList}</div>
          </OutlinedDiv>
        </Grid>
      ) : (
        <div></div>
      );
    } else {
      chipsList = filteredTitles.map((titleId) => {
        let obj = this.findObject(titleId);
        let variantValue =
          obj.titleId === this.props.activeTitle ? "default" : "outlined";
        return this.onBadgeEnable(obj, variantValue);
      });
      return (
        <Paper className={this.props.classes.paper}>
          <div className={this.props.classes.chips}>{chipsList}</div>
        </Paper>
      );
    }
  };

  onBadgeEnable = (obj, variantValue) => {
    let chipAndBadge;
    if (this.props.searchResult === null) {
      chipAndBadge = (
        <Chip
          variant={variantValue}
          size="small"
          color="primary"
          label={obj.title}
          onClick={() => this.handleClick(obj.titleId)}
          onDelete={
            this.props.titleDelete
              ? (e) => this.handleDelete(obj.titleId, e)
              : undefined
          }
        />
      );
    } else {
      chipAndBadge = (
        <Badge
          badgeContent={
            this.props.searchResult[obj.title]
              ? this.props.searchResult[obj.title]
              : 0
          }
          color="secondary"
        >
          <Chip
            variant={variantValue}
            size="small"
            color="primary"
            label={obj.title}
            onClick={() => this.handleClick(obj.titleId)}
            onDelete={
              this.props.titleDelete
                ? (e) => this.handleDelete(obj.titleId, e)
                : undefined
            }
          />
        </Badge>
      );
    }
    return chipAndBadge;
  };

  render() {
    const { classes } = this.props;
    let objectWithGroup = [];
    if (this.props.showGroup && this.props.displayedTitlesWithGroup) {
      Object.entries(this.props.displayedTitlesWithGroup).forEach(
        ([key, value]) => {
          objectWithGroup.push(this.createDisplayObjectGroup(key, value));
        }
      );
    } else {
      const arr = Object.keys(this.props.displayedTitlesWithGroup).reduce(
        (resp, value) =>
          resp.concat(this.props.displayedTitlesWithGroup[value]),
        []
      );
      objectWithGroup.push(this.createDisplayObjectGroup("NoGroup", arr));
    }

    return (
      <div className={classes.root} key="1">
        <Card className={classes.details} key="1">
          <CardContent className={classes.content} key="1">
            <Grid container xs={12} spacing={2}>
              {objectWithGroup && objectWithGroup.map((elem) => elem)}
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayedTitles: state.displayedTitles,
    displayedTitlesWithGroup: state.displayedTitlesWithGroup,
    activeTitle: state.activeTitle,
    data: state.data,
    titleDelete: state.titleDelete,
    searchKeyword: state.searchKeyword,
    searchResult: state.searchResult,
    advancedMode: state.advancedMode,
    callbackFn: state.contentCallback,
    contentLoading: state.contentLoading,
    allTabs: state.allTabs,
    showGroup: state.showGroup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTitle: (id) => dispatch(deleteTitle(id)),
    intialize: () => dispatch(intialize()),
    clickTitle: (id) => dispatch(clickTitle(id)),
    callbackWatcherSaga: (id, title, callbackFn) =>
      dispatch(callbackWatcher(id, title, callbackFn)),
  };
};

TitleSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(TitleSection);
