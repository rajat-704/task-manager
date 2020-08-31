import React, { Component } from 'react';
import './App.css';
import { ConfigureStore } from './redux/configureStore';
import NavComponent from './component/NavComponent';
import Main from './component/MainComponent';
import { Provider } from 'react-redux';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div className="App">
            <NavComponent />
            <Main />
          </div>
        </Provider>
      </div>
    );
  }
}

export default (App);