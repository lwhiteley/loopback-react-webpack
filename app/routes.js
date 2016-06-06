import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';
import Test from './components/common/Test';

import Dashboard from './components/dashboard/Dashboard';
import LatestBills from './components/bill/LatestBills';

export default (
    <Route path="/app" component={App}>
        <Route component={Dashboard}>
            <IndexRoute component={LatestBills}/>
        </Route>

        <Route path="dashboard" component={Test}/>
        <Route path="*" component={NoMatch}/>
    </Route>
);
