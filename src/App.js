import React from 'react';
import {Router, Switch} from 'react-router-dom'
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
    <div>1</div>
)

function App() {
    return (
        <div>
            <Switch>
                <HomePage/>
                <Router exact path='/' component={HomePage}/>
                <Router path='/hats' component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;
