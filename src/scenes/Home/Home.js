import React from 'react';
import { Route, Switch } from 'react-router-dom';
/** Import components */
import TopNav from './components/TopNav/TopNav';
import Landing from './scenes/Landing/Landing';
import Workspace from './scenes/Workspace/Workspace';

class Home extends React.Component {
    render() {
        return (
            <div id="home" className="home-container">
                <TopNav />
                <div>
                    <Switch>
                        <Route path="/workspace" render={props => <Workspace {...props} />} />
                        <Route path="/" render={props => <Landing {...props} />} />
                    </Switch>
                </div>
            </div>
        )
     }
}
export default Home;