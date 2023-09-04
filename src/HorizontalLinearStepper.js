import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Personal from './component/Personal';
import Education from './component/Education';
import WorkExp from './component/WorkExp';
import SopDetails from './component/SopDetails';
import Language from './component/Language';
import Fee from './component/Fee';
import { Context } from './Contexts';
import { useContext } from 'react';
import emailjs from '@emailjs/browser';
import { getCardContentUtilityClass } from '@mui/material';
// import { makeStyles } from '@mui/material';
// import { makeStyles } from '@mui/styles/makeStyles';

const steps = ['Personal Information', 'Education', 'Work Experience','SOP Details','Languages','Fee Information'];
const stepsNo=[3,6,9,13,17,21];

export default function HorizontalLinearStepper() {
  const {user,setUser}=useContext(Context);
  const {count,setCount}=useContext(Context);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
//  for(let i=0;i<user.length;i++){
//   console.log(user[i]);
//  }


  const isStepOptional = (step) => {
    return step === -1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  let Template={
    "email":user.email,
     user,
  }

  const handleNext = () => {
    if(activeStep===steps.length-1){
      emailjs.send('service_0g4x0mf', 'template_2venwcc', Template,'user_aJgaPn5JKM634Nfls369M')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setCount(-1);
    setActiveStep(0);
    setUser({
      name:"",
      email:"",
      age:"",
      education:"",
      institute:"",
      course:"",
      company:"",
      jobtitle:"",
      responsibility:"",
      cinstitute:"",
      courseenroll:"",
      country:"",
      goal:"",
      elistening:"",
      ereading:"",
      espeaking:"",
      ewriting:"",
      feepaid:"",
      feeamount:"",
      gic:"",
      feegic:"",
    })
  };
  // const useStyles = makeStyles(() => ({
  //   root: {
  //     // "& .MuiStepIcon-active": { color: "red" },
  //     "& .MuiStepIcon-completed": { color: "green" },
  //     // "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
  //   }
  // }));

  // const c = useStyles();

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper  activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step sx={ { '& .MuiStepLabel-root .Mui-completed': {
            color: 'green', // circle color (COMPLETED)
          },}} key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - your response saved and sent to your registered email id.

          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep==0 && <Personal/>}
          {activeStep==1 && <Education/>}
          {activeStep==2 && <WorkExp/>}
          {activeStep==3 && <SopDetails/>}
          {activeStep==4 && <Language/>}
          {activeStep==5 && <Fee/>}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            {/* disabled={activeStep !== count} */}
            <Button onClick={handleNext} >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}