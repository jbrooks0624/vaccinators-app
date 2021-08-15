import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QRCode from 'react-qr-code'
import { Grid, Paper, Card, CardContent, Container, Box, Typography }  from '@material-ui/core';



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
    paddingTop: '30px',
    marginTop: '60px',
    verticalAlign: 'center'
  }));
  return (
    <Container maxWidth="sm">
        
        <Item>
            <Typography variant="h3" >
                {user_name + " is fully vaccinated."}
            </Typography>
        </Item>
        <Item>
            <Typography variant="h3" >
                {"Lot #: " + lot_number}
            </Typography>
        </Item>
        <Item>
            <QRCode value={qr_string} />
        </Item>

    </Container>
  );
}
export default ValidatedScreen;
