import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Auth from './Authorization';
import StudentList from './students/StudentList';
import AddStudent from './students/AddStudent';
import EditStudent from './students/EditStudent';
import counters from './shopping-cart/counters';
import TimePicker from './time-comp/TimePicker';

function Routing(props) {

    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/Students" component={StudentList} />
            <PrivateRoute path="/AddStudent" component={AddStudent} />
            <PrivateRoute path="/EditStudent" component={EditStudent} />
            <PrivateRoute path="/ShoppingCart" component={counters} />
            <PrivateRoute path="/TimePicker" component={TimePicker} />
        </Switch>
    );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => Auth.getAuth() ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: "/" }} />)
    } />
);

export default Routing;