import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';


const PrivateRoute = ({ component: Componente, redirect, ...rest}) => {
    const {currentUser} = useAuthContext();
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Componente {...props} /> : <Redirect to={redirect}/>
            }}
        >
            
        </Route>
    )
}

export default PrivateRoute
