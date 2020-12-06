import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import { deleteTitle, intialize, clickTitle } from "../stores/UserActions.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    //   maxWidth: 500,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

class TitleSection extends React.Component {
  handleClick = (id) => {
    console.info("You clicked the Chip.", id);
    this.props.clickTitle(id);
  };

  handleDelete = (id, e) => {
    e.stopPropagation();
    this.props.deleteTitle(id);
  };

  findObject = (objId) => 
    this.props.data.find(item => item.titleId === objId)
  

  render() {
    const { classes } = this.props;
    return (
      <div className="title-section-container">
        <Card className="card-container">
          <CardContent className="card-content">
            {this.props.displayedTitles.map((objId) => {
                console.log("chip obj:", objId);
                let obj = this.findObject(objId)
                return <Chip
                    key={obj.titleId}
                    variant="outlined"
                    size="small"
                    color="primary"
                    label={obj.title}
                    onClick={() => this.handleClick(obj.titleId)}
                    onDelete={(e) => this.handleDelete(obj.titleId, e)}
                    />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("inside mapDispatchToProps");
  return {
    deleteTitle: (id) => dispatch(deleteTitle(id)),
    intialize: () => dispatch(intialize()),
    clickTitle: (id) => dispatch(clickTitle(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TitleSection);

// )(withStyles(useStyles)(TitleSection));
