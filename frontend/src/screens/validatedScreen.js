import React from 'react';
import QRCode from 'qrcode.react'
import { Grid, Card, CardContent, Typography }  from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center'
    
  },
  type: {
    color: 'black'
  },
  media: {
    marginTop: 10
  }
}));

const ValidatedScreen = (props) => {
  
  const classes = useStyles();
  const { user_name, lot_number } = props.props;
  const qr_string = "" + user_name + " " + lot_number;
    
  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '88vh' }}
    >
      <Grid item xs={10}>

        <Card className={classes.root} >
          <CardContent>
          <Typography className={classes.type} variant="h4" >
                {user_name + " is fully vaccinated."}
            </Typography>
            <Typography variant="h6" >
                {"Businesses can scan the QR code to confirm!"}
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
            <QRCode fgColor="#085F63" className={classes.media} value={qr_string} size={200} />
          </CardContent>
        </Card>
            
      </Grid>
    </Grid>
  );
}
export default ValidatedScreen;
