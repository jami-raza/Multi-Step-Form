import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Formone from './Formone';
import Formtwo from './Formtwo';
import Formthree from './Formthree';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(10),
      alignContent:'center'
    },
  }),
);



function getSteps() {
  return ['Sign up', 'Apply loan', 'Agreement'];
}

function getStepContent(stepIndex: number,handleNext: () => void,handleSubmit:()=>void) {
  switch (stepIndex) {
    case 0:
      return <Formone handleNext={handleNext}/>;
    case 1:
      return <Formtwo handleNext={handleNext}/>;
    case 2:
      return <Formthree handleSubmit={handleSubmit}/>;
    
    default:
      return 'Unknown stepIndex';
  }
}

export default function MyStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };


  const handleSubmit = () => {
    setActiveStep(3);
    
  };
  
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <Box display="flex" justifyContent="center" p={1} m={1} boxShadow={3} width={300} marginLeft={50} marginRight={50}>
            <Typography className={classes.instructions}>Thanks! for submitting<div>We will review your application</div></Typography>
            
          </Box>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,handleNext,handleSubmit)}</Typography>
            
          </div>
        )}
      </div>
    </div>
  );
}
