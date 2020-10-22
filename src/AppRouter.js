import React from 'react';
import axios from 'axios';
import Init from './pages/init.js';

import {Route, Switch} from 'react-router-dom';


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Init}/>
        </Switch>
    );
};

export default AppRouter;
