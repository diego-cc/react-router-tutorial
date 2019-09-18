import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Login} from './Login';
import {Register} from './Register';
import {Profile} from './Profile';
import {NotFound} from "./NotFound";

export const BaseLayout = props => (
    <div className="base">
        <header>
            <p>React Router v4 example</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/me">Profile</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
        {/*<div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/me" component={Profile} />
        </div>*/}
        {/* Alternative: use Switch for exclusive routing, i.e. only one of the routes will be matched} */}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/me" component={Profile} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
        </Switch>
        <footer>
            React Router v4 Browser Example (c) 2017
        </footer>
    </div>
);
