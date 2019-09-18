import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { CustomTree } from './index';
import {makeStyles} from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    homeBg:{
        background:'linear-gradient(163deg,#0099e5 17%,#34bf49 100%)'
    },
    glass:{
        backdropFilter: 'saturate(180%) blur(20px)',
        background: '#ffffffbd',//'#e8e8e8',
    },
    nav:{
        textAlign:'left'
    }
}));

function Home(props){
    const classes = useStyles();
    const [ menu, setMenu] = useState('Tree view');

    function handleListItemSelection(e, menu){
        setMenu(menu);
    }

    function RenderListItem(props){
        return (
            <ListItem selected={menu === props.name} button onClick={e=>handleListItemSelection(e,props.name)}>
                <ListItemText primary={props.name} />
            </ListItem>
        );
    }

    return (
        <div className={classes.homeBg}>
           <div className={classes.glass}>
           <CssBaseline />
                <Container fixed>
                    <Grid container style={{ backgroundColor: '#ffffffd4', height: '100vh' }}>
                        <Grid item xs={4}>
                            <List
                            className={classes.nav}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    Components
                                </ListSubheader>
                            }
                            className={classes.root}
                            >
                                {
                                    [
                                        'Tree view',
                                        'Table'
                                    ].map((content,idx) => <RenderListItem key={idx} name={content}/>)
                                }
                            </List>
                        </Grid>
                        <Grid item xs>
                            {
                                menu ==='Tree view' &&
                                <CustomTree/>
                            }
                            {
                                menu === 'Table' &&
                                <span>no component found</span>
                            }
                        </Grid>
                    </Grid>
                </Container>
           </div>
        </div>
    );
    
}

export default React.memo(Home);