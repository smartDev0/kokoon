import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Auth from './Auth/Auth';
import Home from './Home/Home';

class App extends React.Component { 
    render() { 
        return (
            <main>
                <Router>
                    <Switch>
                        <Route path="/auth" render={props => <Auth {...props} />} />
                        {/* <Route path="/404" exact render={props => <Page404 {...props} />} /> */}
                        <Route path="/" exact render={props => <Home {...props} />} />
                        {/* <Redirect to="/404" /> */}
                    </Switch>
                </Router>
            </main>
        );
    }
}
export default App;
