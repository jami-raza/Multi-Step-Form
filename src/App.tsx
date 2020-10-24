import React from 'react';
import MyStepper from './Stepper'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grid: {
      padding: theme.spacing(10),
      textAlign: 'center',
      color:'#7676a7'
      
    },
    title: {
      fontSize: 28,
      
    },
  }),
);
function App() {
  const classes=useStyles();
  return (
    <div>
      
      <Grid item xs={12} className={classes.root}>
      <Grid item xs={6} className={classes.grid}><Typography className={classes.title} component="h2">Virtual Bank Account</Typography></Grid>

        </Grid>
        
      <Grid item xs={12}>
      <MyStepper/>
      </Grid>
    </div>
  )
}
export default App;