import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Lattesoft from './Page/Lattesoft'
import Event from './Page/Event'
import Article from './Page/Article';
import store from './store'

class Main extends Component{
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={Lattesoft}/>
                         <Route path={'/event'} component={Event} />
                        <Route path={'/article'} component={Article}/>
                    </Switch>
                </BrowserRouter>
            </Provider>

        );
    }
}

export default Main;
