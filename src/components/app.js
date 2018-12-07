import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import Nav from './nav'
import {Route, Switch} from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import NonFound from './404';
import SetName from './set_name'

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Switch>
                <Route exact path = '/' component={Home}/>
                <Route path = '/chat' component={Chat}/>
                <Route path = '/set-name' component= {SetName}/>
                <Route component={NonFound}/>
            </Switch>
            
        </div>
    </div>
);

export default App;
