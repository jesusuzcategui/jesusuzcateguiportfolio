import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Homepage from '../../pages/HomepageComponent';

import Header from '../UI/HeaderComponent';
import Aboutpage from "../../pages/About";

class Main extends Component {

    render(){

        const sections = [
            { title: 'Home', url: '#' },
            { title: 'Blog', url: '#' },
            { title: 'About me', url: '#' },
            { title: 'Contact', url: '#' }
            ];


        return (
            <div>
                <BrowserRouter>
                    <CssBaseline />
                    <Header title="Blog" sections={sections} />
                    <Switch>
                        <Route path="/home">
                            <Homepage />
                        </Route>
                        <Route path="/about">
                            <Aboutpage />
                        </Route>
                        <Redirect to="/home" />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

}


export default Main;