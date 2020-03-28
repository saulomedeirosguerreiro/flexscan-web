import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import App from './pages/App';
import Enterprise from './pages/Enterprise';
import Dashboard from './pages/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/app" component={App} />
            <Route path="/enterprise" component={Enterprise} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
}
