import React from 'react';
// import SocialLinks from '../SocialLinks';
import './Contact.css';
import Ishita from "../cards/card1.jsx";
import Kasturi from "../cards/card2.jsx";
import Manisha from "../cards/card3.jsx";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
   },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    marginLeft:"40px",
    marginRight:"40px",
    alignItems: 'center',
        height:"340px",
    // width:"140px",
  },
  
}));

const Contact = props => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();


  return (
    <section id="contact">
      <Grid container spacing={0} spacing={0}
 
  alignItems="center"
  justify="center">
      <Grid item xl={3} md={3} sm={12} xs={12}>
      <Paper className={classes.paper}>  <Ishita />
      </Paper>
    
        </Grid>
        <Grid item xl={3} md={3} sm={12} xs={12}>
      <Paper className={classes.paper}>  <Kasturi />
      </Paper>
    
        </Grid>
        <Grid item xl={3} md={3} sm={12} xs={12}>
      <Paper className={classes.paper}>  <Manisha />
      </Paper>
    
        </Grid>
        {/* <Grid item xl={3} md={3} sm={12} xs={12}>
      <Ishita/>
 
        </Grid>
        <Grid item xl={3} md={3} sm={12} xs={12}>
        <Ishita/>

        </Grid> */}

</Grid>
   {/* <Ishita/> */}
    </section>
  );
};

export default Contact;
