import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { CustomTree } from './index';

function Home(props){
    return (
        <>
            <CssBaseline />
                <Container fixed>
                    <Grid container style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                        <Grid item xs={4}>
                           
                        </Grid>
                        <Grid item xs>
                            <CustomTree/>
                        </Grid>
                    </Grid>
                </Container>
        </>
    );
    
}

export default React.memo(Home);