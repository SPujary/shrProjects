import React, { useState } from 'react';
import Counter from './counter';
import Layout from '../Layout';
import { Paper, Grid, Button ,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  
function Counters (props) { 
        const [counter,setCounter]= useState([{id:1,qty:4},{id:2,qty:2},{id:3,qty:3}]);
     
     const getBadgeClass = () => {         
        return counter ? "#1976d2" : "#d24419";
    }

     const incrementProduct = () => {
        let c=[...counter,{
            id:counter.length+1,
            qty:0
        }]
        setCounter(c);
     }

    const resetQty = () =>{
        let c =counter.map(c =>{
            c={...c,qty:0};
            return c;
        });
        setCounter(c);
    }

    const handleDelete = (counterId) => {
            let count=1;
            console.log("The handle delete clicked",counterId);
            const del = counter.filter(c => c.id !== counterId);
            let d=del.map(e => {
              e ={...e,id:count++}
              return e;
            });
            setCounter(d);
    }
    
    const incrementQty = (cid) => {
        let c =counter.map(c =>{
            if(c.id === cid.id){
            c={...c,qty:cid.qty+1};      
            }
            return c;
        });
        setCounter(c);
    }

    const decrementQty = (cid) => {
        let c =counter.map(c =>{
            if(c.id === cid.id && cid.qty !== 0){
            c={...c,qty:cid.qty-1};      
            }
            return c;
        });
        setCounter(c);
    }
        const classes = useStyles();
        console.log(counter)
        return ( 
            <React.Fragment>
      <Layout />
      <div className={classes.root} >
        <Grid container direction="row" justify="space-between" alignItems="flex-end">
          <Grid item className={classes.header}>Shopping Cart</Grid>
          
        </Grid>
        <Paper elevation={2} className={classes.paperList} style={{padding:'20px'}} >
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid items component="h3" style={{margin:0}}> Products: </Grid>
                <Grid items style={{margin:7}}>
                    <Avatar style={{color:'white',backgroundColor:getBadgeClass(),width:'20px',height:'20px'}}>{counter.length}</Avatar>
                </Grid>
                <Grid items style={{marginRight:7}}><Button onClick={incrementProduct} color="primary" variant="contained"> Add New </Button></Grid>
                <Grid items><Button onClick={resetQty} color="secondary" variant="contained">Reset Qty</Button></Grid>
                </Grid>
                
                 {
                 counter.map(counter => 
                 <Counter key={counter.id} 
                    product={counter} 
                    onDelete={(e)=>handleDelete(e)} 
                    onIncrementQty={incrementQty}
                    onDecrementQty={decrementQty}>
                      {/* Children Props */}
                      
                      <Grid component="h4" style={{margin:7}}>Qty {counter.id} : </Grid>  
                </Counter>)} 
                
                </Paper>
      </div>
    </React.Fragment>
         );
    
}
 
export default Counters;