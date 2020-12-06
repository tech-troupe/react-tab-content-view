import React, {useState} from 'react';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import TitleSection from './TitleSection';
import TabSection from './TabSection';
import {ReactComponent as RefreshIcon} from '../../src/assets/refresh.svg';
import { refreshTitles } from "../stores/UserActions.js";

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
    
    const dispatch = useDispatch();

    return (
        <div className='tab-content-container'>
            <div className='refresh-icon' onClick={() => dispatch(refreshTitles())}>
                <RefreshIcon />
            </div>
            <Card className='title-container'>
                <TitleSection/>
            </Card>
            <Card className='tab-container'>
                <TabSection/>
            </Card>
        </div>
    );
}