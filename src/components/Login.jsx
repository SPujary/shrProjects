import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Auth from './Authorization';
import {Formik, Form,  useField } from 'formik';
import {Grid, Card, CardContent, Typography, TextField, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import * as Yup from 'yup';

const useStyles = makeStyles({
    root:{
        marginTop:'100px',
    },
  loginCard: {
    minWidth: '300px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  label:{
    fontWeight:'20px',
    fontSize:20,
    paddingRight:'10px',
    
},
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
  
  const validationSchema = Yup.object({
    username: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .matches(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,'Only contain letters')
        .required('Required'),
    });
function Login(props) {
    const classes = useStyles();
     const history =useHistory();
    return (
        <Grid container  justify="center" style={{backgroundColor:'#f5f5f5',height:'100vh'}} >
            <Grid item className={classes.root}>
        <Card className={classes.loginCard}>
        <CardContent>
        <Typography variant="h5" component="h1" align="center" style={{marginBottom:'30px'}}>
            Login
        </Typography>
        <Formik initialValues={{username:'',password:''}} 
              validationSchema={validationSchema}
            onSubmit={(data,{setSubmitting})=>{
                setSubmitting(true);
                if (data.username==='admin' && data.password==='admin')
                {
                    Auth.signin();
                    history.push({pathname:'/students'});
                    setSubmitting(false);
                }
                else
                {
                  alert("Invalid Username or Password.")
                }
                
            }}>
                {({ values,isSubmitting}) => (
                <Form>
                    <Grid container direction="column" justify="center" alignItems="center">
                                <Grid items style={{marginBottom:'20px'}}>
                                <MyTextInput label="Username" name="username" type="text"/>
                                </Grid>

                                <Grid itemsstyle={{marginBottom:'20px'}}>
                                <MyTextInput label="Password" name="password" type="password"/>
                                </Grid>

                                <Grid items style={{marginBottom:'20px', marginTop:'20px'}}>
                                    <Button variant="contained" color="primary" type="submit" >Submit</Button>
                                </Grid>
                                {/* <div>
                                    <pre>{JSON.stringify(values, null, 2)}</pre>
                                </div> */}
                                </Grid>
                </Form>
                )}    
            </Formik>
      </CardContent>
      </Card>
      </Grid>
      </Grid>
    );
}

export default Login;