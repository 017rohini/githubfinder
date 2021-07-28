import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// components
import NavBar from './Components/layout/NavBar';
import Alert from './Components/layout/Alert';
import User from './Components/users/User';
import About from './Components/pages/About';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';


// context
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {  
  
  
    
    // async componentDidMount() {
    //   // fetching data
    //   this.setState({
    //     loading: true
    //   });
    //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`);
    //   this.state.loading = false;

    //   this.setState({ users: res.data, loading: false});
    // }
      
      
    
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div>
              <NavBar/>
              <div className="container">
                  <Alert />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/user/:login" component={User} />
                    <Route component={NotFound} />
                  </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
  }

export default App;
