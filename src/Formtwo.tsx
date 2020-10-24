import React from 'react';
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
interface formtwovalues {
    salary:number,
    jobtitle: string,
    jobdescription : string,
    loanAmount : number,
}
interface Props {
    handleNext:()=>void
}

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  error:{
      color:'#FF9494',
      padding:5,
      fontSize:'12px',
  }
}),
);

const LoanInformation = Yup.object().shape({
    salary : Yup.number()
        .min(50000,'Not enough salary to take loan')
        .required('Salary is required'),
    jobtitle : Yup.string()
        .required('This field is required'),
    jobdescription : Yup.string()
        .required('This fiel is required'),
    loanAmount:Yup.number().when('salary',{
        is:(salary:50000)=>(salary = 50000),
        then:Yup.number().min(100000,'Loan amount must be in').max(150000),
        
        
        })
        
    })
    


const Formtwo:React.FC<Props> = ({handleNext}) => {
    const initialValue:formtwovalues = {jobtitle:'',jobdescription:'',salary:0,loanAmount:0}
    const classes = useStyles();
    return (
        <Box display="flex" justifyContent="center" p={1} m={1} boxShadow={3} width={300} marginLeft={50} marginRight={50} >
        <Formik
        initialValues={initialValue}
        validationSchema={LoanInformation}
        onSubmit={(values) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              handleNext();
            }, 400);
          }}
        >
            {({errors,touched})=>(
            <Form className={classes.root}>
            <Box p={1} m={1}>
            <FormLabel component="legend">Apply for Loan</FormLabel>
            </Box>
            <Box p={1} m={1}>
                <Field as={TextField} required name="jobtitle" id="jobtitle" placeholder="Enter your Job Title" label="Job Title"/>
                {touched.jobtitle && errors.jobtitle && <div className={classes.error}>{errors.jobtitle}</div>}
                </Box>
                <Box p={1} m={1}>
                <Field as={TextField} required name="jobdescription" id="jobdescription" placeholder="Enter your job details" label="Job Description"/>
                {touched.jobdescription && errors.jobdescription && <div className={classes.error}>{errors.jobdescription}</div>}
                </Box>
                <Box p={1} m={1}>
                <Field as={TextField} required name="salary" id="salary" placeholder="50000" label="Salary"/>
                {touched.salary && errors.salary && <div className={classes.error}>{errors.salary}</div>}
                </Box>
                <Box p={1} m={1}>
                <Field as={TextField} required name="loanAmount" id="loanAmount" placeholder="100000" label="Loan Amount"/>
                {touched.loanAmount && errors.loanAmount && <div className={classes.error}>{errors.loanAmount}</div>}
                </Box>
                <Box p={1} m={1}>
                <Button variant="contained" color="primary" type="submit">Next</Button>
                </Box>
            </Form>
            )}
        </Formik>
        </Box>
    )
}
export default Formtwo;