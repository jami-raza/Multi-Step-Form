import React from 'react'
import {Formik,Form,Field} from 'formik';
import * as Yup from 'yup'
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
interface formthreevalues {
    agreement : boolean,
}
interface Props {
    handleSubmit:()=>void
}

const useStyles = makeStyles({
    
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const AgreementSchema = Yup.object().shape({
    agreement:Yup.bool().oneOf([true]).required('Please agree to continue')
})

const Formthree:React.FC<Props> = ({handleSubmit}) => {
    const classes = useStyles(); 
    const initialvalue:formthreevalues = {agreement:false}
    return (
        <Box display="flex" justifyContent="center" p={1} m={1} boxShadow={3} width={720} marginRight={10} marginLeft={10}>
        <Formik
        initialValues={initialvalue}
        validationSchema={AgreementSchema}
        onSubmit={(values) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              handleSubmit();
            }, 400);
          }}
        >
            {({errors})=>(
            <Form>
            <Box p={1} m={1}>
            <Typography className={classes.pos} color="textSecondary">
            A contract is a legally enforceable agreement between two or more parties. It is an agreement that creates a legal duty or responsibility. Most companies and agencies preferred a written one, but many struggles finding a good set of templates they can use to make this possible between them and the employee. Using a template saves them time, but most generators online only offer limited features. To address the difficulties and less featured templates, JotForm creates a collection of ready-made contract templates in PDF format that is completely customizable and a free to use.



Many of our contract templates are made to have the basic sections such as the terms of employment, employee responsibilities, compensation and benefits and one that may include a non-disclosure agreement or commonly known as NDA. These common sections are the advantages of making your contract management process more efficient and effective. The bottom line is these PDF contract templates will justify the function and duties of each party. And again, as a document signed by both parties, a contract is enforceable in a court of law.



JotForm's PDF contract templates are editable which means you can adjust the overall format including the aforementioned sections. If the job description changes significantly or there is a need to change the responsibility of the employee within the company, you can have the templates edited to send a new contract where both parties can review and sign again.
            </Typography>
            <Box p={1} m={1}>
            <Field as={Checkbox} name="agreement" id="agreement"/>
                {errors.agreement && <div>{errors.agreement}</div>}
            </Box>
            </Box>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </Form>
            )}
        </Formik>
        </Box>
    )
}
export default Formthree;