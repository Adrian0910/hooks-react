import React from 'react';
import { NavBar } from './NavBar';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { AboutScreen } from './AboutScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">

                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/about" component={AboutScreen}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    {/*<Route component={HomeScreen} />  Default route 1 */}
                    <Redirect to="/" /> {/* Default route 2 or 404 */}
                </Switch>
                </div>

            </div>
        </Router>
    )
}
