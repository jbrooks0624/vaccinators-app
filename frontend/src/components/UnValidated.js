import React, { useState } from 'react';
import QRCode from 'qrcode.react'
import { Grid, Button, Card, CardContent, Typography, TextField }  from '@material-ui/core';
import { try_validate } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
      
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const UnValidated = (props) => {
  
  const classes = useStyles();
  const { user_name, lot_number } = props.props;
  
    const dispatch = useDispatch();
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [lot, setLot] = useState("");
    const [dob, setDob] = useState("");
    const [is_error, setError] = useState(false);
    const [attempted, setAttempted] = useState(false);
    
    const onClickEvent = () => {
      console.log(dob);
      if (dob[2] !== '/' || dob[5] !== '/' || dob.length !== 10) {
        setError(true);
        return;
      }
      else {
        setError(false);
        dispatch(try_validate(first,last,lot,dob));
        setAttempted(true);
      }
        
    }


  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '89vh' }}
    >
      
      <Grid item xs={10}>

        <Card className={classes.root} >
          <CardContent>
          <Typography variant="h4" > {
            attempted ? 
            "Sorry, this information didn't match our records.Try again?" :
            " If you are fully vaccinated, enter the following information below"
          }
                   
            </Typography>
          <Typography variant="h7" >
          <t>Read more: </t>
          <a href="https://www.vaccines.gov/">Vaccine information</a>
          </Typography>
          </CardContent>
        </Card>
        
        <Card className={classes.root}>
          <CardContent>
            <TextField
              error={false}
              id="standard-error-helper-text"
              label="First Name"
              defaultValue=""
              helperText=""
              value={first} 
              onChange={event => setFirst(event.target.value)}
            />
            <TextField
              error={false}
              id="standard-error-helper-text"
              label="Last Name"
              defaultValue=""
              helperText=""
              value={last} 
              onChange={event => setLast(event.target.value)}
            />
            <TextField
              error={is_error}
              id="standard-error-helper-text"
              label="Date of Birth"
              defaultValue=""
              helperText="format: MM/DD/YYYY"
              value={dob} 
              onChange={event => setDob(event.target.value)}
            />
            <TextField
              error={false}
              id="standard-error-helper-text"
              label="Vaccine Lot Number"
              defaultValue=""
              helperText=""
              value={lot} 
              onChange={event => setLot(event.target.value)}
            />
            
            </CardContent>
            <CardContent>
            <Button variant="contained" color="primary"
              className="button" onClick={() => onClickEvent() }>Submit</Button>
          
            </CardContent>
        </Card>
 
      </Grid>
    </Grid>
  );
}
export default UnValidated;


// import React, { useState } from 'react'
// import './UnValidated.css'

// import { Grid, Card, Button, CardContent, Typography, TextField }  from '@material-ui/core';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));
    

// const unValidated = (props) => ({




//   const classes = useStyles();
//   const { user_name, lot_number } = props.props;
//   const qr_string = "" + user_name + " " + lot_number;
    
//   console.log("user name in val: ", user_name);
  

//   return (
//     <Grid
//       // container
//       // spacing={0}
//       // direction="column"
//       // alignItems="center"
//       // justify="center"
//       // style={{ minHeight: '100vh' }}
//     >
//       <Grid item xs={10}>

//         <Card className={classes.root} >
//           <CardContent>
//           <Typography variant="h4" >
//           If you are fully vaccinated, enter the following information below
//             </Typography>
//           </CardContent>
//         </Card>
        
//         <Card className={classes.root}>
//           <CardContent>
//             <TextField
//             error
//             id="standard-error-helper-text"
//             label="Error"
//             defaultValue="Hello World"
//             helperText="Incorrect entry."
//             value={firstName} 
//             onChange={event => setFirst(event.target.value)}
//             />
//           </CardContent>
//         </Card>

// {/*         
//         <h3 className="header3">If you are not fully vaccinated, please check out this information below to get vaccinated today!</h3>
//         <div className="button1">
//                 
//             </div>
//         <div className="moreInfo">
//             <a href="https://www.vaccines.gov/">Vaccine information</a>
//         </div> */}
//       </Grid>
//     </Grid>
//   );
// }
// export default unValidated;
