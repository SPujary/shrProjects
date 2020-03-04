import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import StudentList from './students/StudentList';
import AddStudent from './students/AddStudent';
import EditStudent from './students/EditStudent';
import counters from './shopping-cart/counters';

function Routing(props) {
    return (  
            <BrowserRouter>    
                <Route path="/" exact component={Login}/>
                <Route path="/Students" component={StudentList}/>
                <Route path="/AddStudent" component={AddStudent}/>
                <Route path="/EditStudent" component={EditStudent}/>
                <Route path="/ShoppingCart" component={counters}/>
            </BrowserRouter>
            );
    }
            
export default Routing;