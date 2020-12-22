import React from "react";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import compose from "recompose/compose";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import PropTypes from "prop-types";

import { deleteTitle, intialize, clickTitle } from "../stores/UserActions";
import {callbackWatcher} from "../middleware/CallbackActions";

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
<<<<<<< HEAD
    if (!this.props.advancedMode){
=======
>>>>>>> 981caa0dfae4f21ce6ff2dc86f35842eba820937
    this.props.clickTitle(id);
    }
    else{
      const clickedTitleObject = this.findObject(id);
      if (!clickedTitleObject.content){
        this.props.clickTitle(id);
      } else{
        this.props.callbackWatcher(callbackWatcher(id));
      }
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
          key={obj.titleId}
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
            key={obj.titleId}
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
      <div className={classes.root}>
        <Card className={classes.details}>
          <CardContent className={classes.content}>
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
  console.log("statetoprops Titlesection:", state);

  return {
    displayedTitles: state.displayedTitles,
    activeTitle: state.activeTitle,
    data: state.data,
    titleDelete: state.titleDelete,
    searchKeyword: state.searchKeyword,
    searchResult: state.searchResult,
<<<<<<< HEAD
    advancedMode: state.advancedMode
=======
>>>>>>> 981caa0dfae4f21ce6ff2dc86f35842eba820937
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("inside mapDispatchToProps");
  return {
    deleteTitle: (id) => dispatch(deleteTitle(id)),
    intialize: () => dispatch(intialize()),
    clickTitle: (id) => dispatch(clickTitle(id)),
    ...bindActionCreators(
      {
        callbackWatcher
      },
      dispatch
    ),
    
    // callbackWatcher:(id) => dispatch(callbackWatcher(id))
  };
};

TitleSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(useStyles)(TitleSection));

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(TitleSection);
