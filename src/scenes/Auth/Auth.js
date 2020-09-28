import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
/** Import components */
import Login from './scenes/Login/Login';
/** Import css */
import './index.css';

class Auth extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // if (this.props.location.pathname === '/auth') {
        //     window.location.href = '/auth/login';
        // }
    }

    render() {
        return (
            <div className="auth-container">
                <div>
                    <Switch>
                        <Route path="/auth/login" component={Login}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
export default Auth;