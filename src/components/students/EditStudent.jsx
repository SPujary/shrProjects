import React,{useEffect, useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form,  useField } from 'formik';
import Layout from '../Layout';
import { Paper, Grid, Button, TextField } from '@material-ui/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import {studentReducer} from './StudentReducer';

const useStyles = makeStyles({
    root: {
        marginLeft: '195px',
        marginTop: '60px',
        maxWidth: '100%',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 25,
        fontWeight: 500,
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 20,
        paddingBottom: 20,
    },
    paperList: {
        margin: '0px 20px',
    },
    inputField: {
        marginBottom: '10px',
    },
    label: {
        fontWeight: '20px',
        fontSize: 20,
        paddingRight: '10px',
    },
    error: {
        color: 'red',
    }
});



const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const classes = useStyles();
    return (
        <div className={classes.inputField}>
            <label htmlFor={props.id || props.name} className={classes.label}>{label} : </label>
            <TextField {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

const MyCalendar = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const classes = useStyles();
    
    return (
      <div className={classes.inputField}>
        <label htmlFor={props.id || props.name} className={classes.label}>{label} : </label>
        <TextField {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={classes.error}>{meta.error}</div>
        ) : null}
      </div>
    );
  };

const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .matches(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,'Only contain letters')
        .required('Required'),
    lastName: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .matches(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,'Only contain letters')
        .required('Required'),
    dob:   Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Format: xyz@abc.com')
        .required('Required'),
});

function EditStudent(props) {
    const classes = useStyles();
    const history = useHistory();
    const [student,dispatch]= useReducer(studentReducer,[],()=>{
        const localData = localStorage.getItem('student');
        return localData ?JSON.parse(localData): [];
    });

    useEffect(()=>{
        localStorage.setItem('student',JSON.stringify(student));
      },[student]);
      
    return (
        <React.Fragment>
            <Layout />
            <div className={classes.root} >
                <Grid container direction="row" justify="space-between" alignItems="flex-end">
                    <Grid item className={classes.header}>Edit Student</Grid>
                    <Grid item className={classes.header}>
                        <Button variant="contained" href="/Students">Back</Button>
                    </Grid>
                </Grid>
                <Paper elevation={2} className={classes.paperList}>
                    <Grid container justify="center" component="h2">Form</Grid>
                    <Formik

                        initialValues={{
                            firstName: props.location.state.data.firstName,
                            lastName: props.location.state.data.lastName,
                            dob: props.location.state.data.dob,
                            email: props.location.state.data.email,
                        }}

                        validationSchema={validationSchema}

                        onSubmit={(data, { setSubmitting }) => {
                            setSubmitting(true);                          
                            dispatch({type:'EDIT_STUD',student:{id:props.location.state.data.id,firstName:data.firstName, lastName:data.lastName, dob:data.dob, email: data.email}});       
                            history.push({
                                pathname: '/Students',
                                //state: { firstName: data.firstName, lastName: data.lastName }
                            });

                            setSubmitting(false);

                        }}>
                        {/* {({ values, isSubmitting }) =>{ */}

                        <Form>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Grid items>
                                    <MyTextInput label="First Name" name="firstName" type="text" />
                                </Grid>

                                <Grid items>
                                    <MyTextInput label="Last Name" name="lastName" type="text" />
                                </Grid>

                                <Grid items>
                                <MyCalendar label="Date of Birth" name="dob" type="date" InputLabelProps={{ shrink: true}}/>
                                </Grid>

                                <Grid items>
                                <MyTextInput label="Email" name="email" type="text"/>
                                </Grid>     

                                <Grid items>
                                    <Button variant="contained" color="primary" type="submit" >Submit</Button>
                                </Grid>

                                {/* <div>
                                    <pre>{JSON.stringify(values, null, 2)}</pre>
                                </div> */}
                            </Grid>
                        </Form>
                        {/* )} } */}
                    </Formik>
                </Paper>
            </div>
        </React.Fragment>
    );
}

export default EditStudent;