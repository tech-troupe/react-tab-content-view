import React from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import PropTypes from "prop-types";

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
    // maxWidth: 800,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
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
      !this.props.allTabs.includes(this.props.activeTitle)
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

    return (
      <div className={classes.root} key="1">
        <Card className={classes.details} key="1">
          <CardContent className={classes.content} key="1">
            {this.props.displayedTitles.map((objId) => {
              let obj = this.findObject(objId);
              let variantValue =
                obj.titleId === this.props.activeTitle ? "default" : "outlined";
              return this.onBadgeEnable(obj, variantValue);
            })}
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayedTitles: state.displayedTitles,
    activeTitle: state.activeTitle,
    data: state.data,
    titleDelete: state.titleDelete,
    searchKeyword: state.searchKeyword,
    searchResult: state.searchResult,
    advancedMode: state.advancedMode,
    callbackFn: state.contentCallback,
    contentLoading: state.contentLoading,
    allTabs: state.allTabs,
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
