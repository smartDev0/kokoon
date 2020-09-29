import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
/** Import components */
import Login from './scenes/Login/Login';
import Register from './scenes/Register/Register';
import Reset from './scenes/Reset/Reset';
import Forgot from './scenes/Forgot/Forgot';
/** Import css */
import './index.css';

class Auth extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="auth-container">
                <div>
                    <Switch>
                        <Route path="/auth/signin" component={Login} />
                        <Route path="/auth/signup" exact component={Register} />
                        <Route path="/auth/reset" exact component={Reset} />
                        <Route path="/auth/forgot" exact component={Forgot} />
                    </Switch>
                </div>
            </div>
        )
    }
}
export default Auth;