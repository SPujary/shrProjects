import React, { useEffect, useReducer } from 'react';
import Layout from '../Layout';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import { studentReducer } from './StudentReducer';

const useStyles = makeStyles({
  root: {
    marginLeft: '195px',
    marginTop: '60px',
    maxWidth: '100%',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 30,
    fontWeight: 500,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  paperList: {
    margin: '0px 20px',
  }
});




// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



function StudentList(props) {
  const classes = useStyles();
  let counter= 1;
  //const [student,setStudent]=useState([{id:1,firstName:'Shrinath',lastName:'Poojary'}]);
  const [student, dispatch] = useReducer(studentReducer, [],()=>{
    const localData = localStorage.getItem('student');
    return localData ?JSON.parse(localData): [];
});

useEffect(()=>{
  localStorage.setItem('student',JSON.stringify(student));
},[student]);

  // useEffect(()=>{
  // if(props.location.state)
  // {
  //   setStudent([...student, {
  //     id:student.length+1,
  //     firstName: props.location.state.firstName,
  //     lastName: props.location.state.lastName
  //   }]);
  //     console.log(student);
  //     // console.log(props.location)
  // }
  // else{
  //   console.log('Nothing', props.location);
  // }}
  //   ,[props.location.state!==undefined]
  // );

  const handleDeleteStudent = (sid) =>{
      dispatch({type:'DEL_STUD',studId:sid});
   }


  // console.log(student);
  return (
    <React.Fragment>
      <Layout />
      <div className={classes.root} >
        <Grid container direction="row" justify="space-between" alignItems="flex-end">
          <Grid item className={classes.header}>Student List</Grid>
          <Grid item className={classes.header}>
            <Button variant="contained" color="primary" href="/AddStudent">Add Student</Button>
          </Grid>
        </Grid>
        <Paper elevation={2} className={classes.paperList} >
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sr. No.</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Date of Birth</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {student.map(row =>
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {counter++}
                    </TableCell>
                    <TableCell align="right">{row.firstName}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.dob}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">
                      <Link to={{ pathname: '/EditStudent', state: { data: row } }}> <Button><EditIcon /></Button></Link>
                      <Button onClick={() => handleDeleteStudent(row.id)}><DeleteIcon /></Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </React.Fragment>
  );
}

export default StudentList;