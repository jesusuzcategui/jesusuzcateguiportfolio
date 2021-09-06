import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Homepage from '../../pages/HomepageComponent';

import Header from '../UI/HeaderComponent';

class Main extends Component {

    render(){
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/home">
                            <Homepage />
                        </Route>
                        <Redirect to="/home" />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

}


export default Main;