import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

import ApiTreeDisplay from './TabPanel'
import './api-summary.styles.css';

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
  
export const TabContent  = (props) => {
    const [showApiTree, setShowApiTree] = useState(false);
    const [currentChip, setCurrentChip] = useState(-1);
    const [activeTabs, setActiveTabs] = useState(new Set());

    const classes = useStyles();
    
    const createTreeArray = (auth) => {
        console.log("apisummary props:", auth.post.parameters[3].schema.properties);
        return auth.post.parameters[3].schema.properties;
    }

    const handleClick = (val) => {
        console.info('You clicked the Chip.',val);
        setCurrentChip(val);
        showApiTree?setShowApiTree(false):setShowApiTree(true);
        setActiveTabs(activeTabs => new Set(activeTabs).add(val));
    };

    const handleDelete = () => {
        
    }

    return (
        <div className='api-summary-container'>
            <Card className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Core Payments
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.spec.info.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {"v" + props.spec.info.version}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.spec.info.description}
                        <br />
                        {props.spec.basePath}
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.details}>
                <CardContent className={classes.content}>
                    {
                        props.spec.operations.map((operation, idx) => {
                            return <Chip key={idx} variant="outlined" size="small" color="primary" label={operation} onClick={ () => handleClick(idx)} onDelete={handleDelete}/>
                        })}
                </CardContent>
            </Card>
            <Card>
                {showApiTree && <ApiTreeDisplay operationIdx={currentChip} activeTabs = {activeTabs}/>}
            </Card>
        </div>
    );
}