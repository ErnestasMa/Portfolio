import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'
import Home from './Home'
import Weather from "./Weather/weather";
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/projects' component={ProjectsList} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/weather' component={Weather} />
                        <Route path='/projects/create' component={NewProject} />
                        <Route path='/projects/:id' component={SingleProject} />

                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
