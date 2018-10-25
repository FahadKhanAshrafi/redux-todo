import React, { Component } from 'react';
import Todo from './todo/index'
import { Provider } from "react-redux";
import { store } from "./redux/store";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
            <Todo/>
          </Provider>
      </div>
    );
  }
}

export default App;
