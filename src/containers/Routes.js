import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import authorization from '../libs/authorization';

import App from '../components/App';
import Login from '../containers/Login';


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => (
    <Route
        {...rest}
        render={({ location }) =>
            authorization.isAuthenticated() ? (
                children
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
        }
    />
);

export default () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact >
                    <App />
                </PrivateRoute>/>
                <Route path="/login" >
                    <Login />
                </Route>/>
            </Switch>
        </Router>
    );
};