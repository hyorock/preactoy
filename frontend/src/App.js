import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Header from './components/Header';
import Login from './routes/Login';
import Posts from './routes/Posts';
import MyPage from './routes/MyPage';
import Search from './routes/Search';
import BaseballGame from './routes/BaseballGame';
import Todolist from './routes/todolist/Todolist';
import NoMatch from './routes/NoMatch';

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about/:username" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/me" component={MyPage} />
                    <Route path="/search" component={Search} />
                    <Route path="/baseballgame" component={BaseballGame} />
                    <Route path="/todolist" component={Todolist} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;