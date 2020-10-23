import React from 'react'
import {Formik, Form, Field} from 'formik';
import TextField from '@material-ui/core/TextField'
import * as Yup from 'yup';

interface Form_1_values {
    firstName : string,
    lastName : string,
    email : string,
    password : string,
}

interface Props {
    handleNext: () => void
  }
const Formone:React.FC<Props> = ({handleNext}) => {
    const initialvalue:Form_1_values = {firstName:'',lastName:'',email:'',password:''}
    const SignupSchema = Yup.object().shape({
        firstName : Yup.string()
            .uppercase().min(1,'Enter atleast one Uppercase')
            .min(5,'First Name should be 5 characters long')
            .max(10,'First Name should below 10 characters ')
            .required('First Name is required'),
        lastName : Yup.string()
            
            .min(5,'First Name should be 5 characters long')
            .max(10,'First Name should below 10 characters ')
            .required('Last Name is required'),
        email : Yup.string()
            
            .email()
            .required('Email is required'),
        password : Yup.string()
            
            .min(8,'Password should be 8 characters long')
            .max(15,'Password should equal or less than 15 characters')
            .matches(/^[A-Za-z]\w{7,14}$/,'Dont enter special characters')
            .required('Password is required'),
        })

    return (
        
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
            <Form>
                <label htmlFor="email">Email Address</label>
                <Field type="text" as={TextField} id="firstName" name="firstName" placeholder="John"/>
                {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
                <Field type="text" as={TextField} label="lastName" id="lastName" name="lastName" placeholder="Wick"/>
                {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
                <Field type="text" as={TextField} label="email" id="email" name="email" placeholder="johwick@gmail.com"/>
                {touched.email && errors.email && <div>{errors.email}</div>}
                <Field type="text" as={TextField} label="password" id="password" name="password" placeholder="a-zA-Z0-9"/>
                {touched.password && errors.password && <div>{errors.password}</div>}  
                <button type="submit">Submit</button>           
            </Form>
            )}
        </Formik>
       

        
    )
}
export default Formone;