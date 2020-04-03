import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Service from './pages/Service';
import Enterprise from './pages/Enterprise';
import ActionEnterprise from './pages/Enterprise/Action';
import DetailedEnterprise from './pages/Enterprise/Detailed';
import ActionService from './pages/Service/Action';
import Dashboard from './pages/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/service" exact component={Service} />
            <Route path="/service/create" component={ActionService} />
            <Route path="/service/edit/:id" component={ActionService} />

            <Route path="/enterprise" exact component={Enterprise} />
            <Route path="/enterprise/create" component={ActionEnterprise} />
            <Route path="/enterprise/edit/:id" component={ActionEnterprise} />
            <Route
                path="/enterprise/:id"
                exact
                component={DetailedEnterprise}
            />

            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
}
