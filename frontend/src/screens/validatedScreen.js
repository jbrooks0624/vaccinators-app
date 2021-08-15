import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QRCode from 'qrcode.react'
import { Grid, Paper, Card, CardContent, Container, Box, Typography }  from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider, styled } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    
  },
}));

const ValidatedScreen = (props) => {
  
  const classes = useStyles();
  const { user_name, lot_number } = props.props;
  const qr_string = "" + user_name + " " + lot_number;
    
  console.log("user name in val: ", user_name);
  

  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={10}>
        <Card className={classes.root} >
          <CardContent>
          <Typography variant="h4" >
                {user_name + " is fully vaccinated."}
            </Typography>
          </CardContent>
        </Card>
        
        <Card className={classes.root}>
        <CardContent>
        <Typography variant="h5" >
                {"Lot #: " + lot_number}
            </Typography>
            </CardContent>
        </Card>
        <Card className={classes.root}>
        <CardContent>
        <QRCode className={classes.media} value={qr_string} size={200} />
        </CardContent>
        </Card>
            
        
      </Grid>
    </Grid>
  );
}
export default ValidatedScreen;
