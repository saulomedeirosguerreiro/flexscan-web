import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import App from './pages/App';
import Enterprise from './pages/Enterprise';
import CreateEnterprise from './pages/Enterprise/Create';
import CreateApp from './pages/App/Create';
import Dashboard from './pages/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/app" exact component={App} />
            <Route path="/app/create" component={CreateApp} />
            <Route path="/enterprise" exact component={Enterprise} />
            <Route path="/enterprise/create" component={CreateEnterprise} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
}
