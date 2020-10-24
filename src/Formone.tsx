import React from 'react'
import {Formik, Form, Field} from 'formik';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';


import * as Yup from 'yup';

interface Formonevalues {
    firstName : string,
    lastName : string,
    email : string,
    password : string,
    phone : number,
    gender : string,
    showPassword: boolean;
}

interface Pass {
    password : string,
    showPassword: boolean;
}

interface Props {
    handleNext: () => void
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
const Formone:React.FC<Props> = ({handleNext}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
    const [passwordShown, setPasswordShown] = React.useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
      };
   
    const initialvalue:Formonevalues = {firstName:'',lastName:'',email:'',password:'',phone:0,gender:'',showPassword: false,}
    const SignupSchema = Yup.object().shape({
        firstName : Yup.string()
            .uppercase().min(1,'Enter atleast one Uppercase')
            .min(4,'First Name should be 5 characters long')
            .max(10,'First Name should below 10 characters ')
            .required('First Name is required'),
        lastName : Yup.string()
            
            .min(4,'First Name should be 5 characters long')
            .max(10,'First Name should below 10 characters ')
            .required('Last Name is required'),
        email : Yup.string()
            
            .email()
            .required('Email is required'),
        password : Yup.string()
            
            .min(8,'Password should be 8 characters long')
            .max(15,'Password should equal or less than 15 characters')
            .matches(/^[A-Za-z]\w{7,14}$/,'Password contain mixed characters')
            .required('Password is required'),
        phone : Yup.number()
            .required('Phone Number is required')
            .min(11,'Please enter a valid Phone number'),
        gender : Yup.string()
            .required('Select one of these')   
            
        })

    return (
        <Box display="flex" justifyContent="center" p={1} m={1} boxShadow={3} width={300} marginLeft={50} marginRight={50} >
        <Formik 
        initialValues = {initialvalue}
        validationSchema = {SignupSchema}
        onSubmit = {(values) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              handleNext();
            }, 400);
          }}
        >
            {({ errors, touched }) => (
                
            <Form className={classes.root}>
                <Box p={1} m={1}>
                <FormLabel component="legend">Sign up</FormLabel>
                </Box>
                <Box p={1} m={1}>
                <Field type="text" as={TextField} required id="firstName" name="firstName" placeholder="John" label="First Name"/>
                {touched.firstName && errors.firstName && <div className={classes.error}>{errors.firstName}</div>}
                </Box>
                <Box p={1} m={1}>
                <Field type="text" as={TextField} required  id="lastName" name="lastName" placeholder="Wick" label="Last Name"/>
                {touched.lastName && errors.lastName && <div className={classes.error}>{errors.lastName}</div>}
                </Box>
                <Box p={1} m={1}>
                <Field type="text" as={TextField} required id="email" name="email" placeholder="johwick@gmail.com" label="Email"/>
                {touched.email && errors.email && <div className={classes.error}>{errors.email}</div>}
                </Box>
                <Box p={1} m={1}>
                    
                <Field  as={Input} type={passwordShown ? "text" : "password"}     
                required id="password" name="password" placeholder="[A-Za-z]\w{7,14}" label="Password"
                endAdornment={
                    <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisiblity}
                  
                >
                  {passwordShown ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>
                }/>
                    
                {touched.password && errors.password && <div className={classes.error}>{errors.password}</div>} 
                
                </Box>
                <Box p={1} m={1}>
                <Field type="number" as={TextField} required id="phone" name="phone" placeholder="0310-8976511" label="Phone"/>
                {touched.phone && errors.phone && <div className={classes.error}>{errors.phone}</div>} 
                </Box>
                <Box p={1} m={1}>
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <Field type="radio" as={FormControlLabel} value="female" control = {<Radio/>} label="female" name="gender" id="gender"/>
                    <Field type="radio" as={FormControlLabel} value="male" control = {<Radio/>} label="male" name="gender" id="gender"/>
                    <Field type="radio" as={FormControlLabel} value="other" control = {<Radio/>} label="other" name="gender" id="gender"/>
                     {touched.gender && errors.gender && <div className={classes.error}>{errors.gender}</div>}
                </RadioGroup>
                </FormControl>
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
export default Formone;