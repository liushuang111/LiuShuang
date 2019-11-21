import React,{Component} from 'react';
import './App.css';
import MapRoute from './route/MapRoute'
import route from './route/route.config'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
class App extends Component {
  state = {  }
  render() {
    return (
      <Provider store={store}>
        <Router>
            <MapRoute route={route}></MapRoute>
        </Router>
      </Provider>   
    );
  }
}

export default App;
