import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
/** Import components */
import TopNav from './components/TopNav/TopNav';
import Landing from './scenes/Landing/Landing';
import Workspace from './scenes/Workspace/Workspace';

class Home extends React.Component {
    componentDidMount() {
    }
    render() {
        if (this.props.location.pathname == '/') {
            return (
                <Redirect
                    to={{
                        pathname: '/landing'
                    }}
                />
            );
        }
        return (
            <div id="home" className="home-container">
                <TopNav {...this.props} />
                <div>
                    <Switch>
                        <Route path="/workspace" exact render={props => <Workspace {...props} />} />
                        <Route path="/landing" render={props => <Landing {...props} />} />
                    </Switch>
                </div>
            </div>
        )
     }
}
export default Home;