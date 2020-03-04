import React from 'react';
import { Grid, Button ,Avatar} from '@material-ui/core';

function Counter (props) {

    const getBadgeClass =()=> {
        return props.product.qty ? "#1976d2" : "#d24419";
    }
        return (
            <React.Fragment>
            { props.children}
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid items style={{margin:7}}>
                    <Avatar style={{color:'white',backgroundColor:getBadgeClass(),width:'20px',height:'20px'}}>{props.product.qty}</Avatar>
            </Grid>
            <Grid items style={{marginRight:7}}><Button onClick={() => props.onIncrementQty(props.product)} color="primary" variant="contained" size="small">+</Button></Grid>
            <Grid items style={{marginRight:7}}><Button onClick={() => props.onDecrementQty(props.product)} color="primary" variant="contained" size="small">-</Button></Grid>
            <Grid items style={{marginRight:7}}><Button onClick={() => props.onDelete(props.product.id)} color="secondary" variant="contained" size="small">Delete</Button></Grid>
            </Grid>
            </React.Fragment>
        );
    

}
 
export default Counter;