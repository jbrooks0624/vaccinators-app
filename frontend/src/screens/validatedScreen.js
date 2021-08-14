import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QRCode from 'react-qr-code'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { createTheme, ThemeProvider, styled } from '@material-ui/core/styles';
const ValidatedScreen = (props) => {
  const { is_logged_in, user_name, is_validated, is_loading, lot_number } = props.props;
  const qr_string = "" + user_name + " " + lot_number;
    
  console.log("user name in val: ", user_name);
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 'fit',
    lineHeight: '60px',
  }));
  return (
    <Grid container spacing={2} 
        style={{display: 'flex',
        flexdirection:'row'}} 
    >
        <Grid item xs={6}>
            <Item>
                <QRCode value={qr_string} />
            </Item>
             
        </Grid>
    </Grid>
  );
}
export default ValidatedScreen;
