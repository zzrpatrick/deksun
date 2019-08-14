import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { browserHistory } from 'react-router'
import  Homepage  from "../component/HomePage/Homepage";
import Productpage from "../component/ProductPage/Productpage"

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/products" component={Productpage}/>
        </Switch>
    </ BrowserRouter>
);

export default BasicRoute;