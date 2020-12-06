import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import TitleSection from './TitleSection';
import TabSection from './TabSection';

import './TabContent.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    //   maxWidth: 500,
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto',
        '& > *': {
            margin: theme.spacing(0.5),
          },
    },
    title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      }
}));

export const TabContent  = () => {
    const classes = useStyles();

    return (
        <div className="tab-content-container">
            <Card className={classes.details}>
                <TitleSection/>
            </Card>
            <Card>
                <TabSection/>
            </Card>
        </div>
    );
}