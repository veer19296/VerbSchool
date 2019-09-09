import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import Routes from "./routes";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from "./reducers/index";
import {createStore,applyMiddleware} from 'redux';


class App extends Component {
  constructor(props){
    super(props)
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = Text.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
  }

  render() {

    const logger = createLogger({
      predicate: (getState, action) => __DEV__ 
    });
    
    const createStoreWithMiddleware = applyMiddleware (thunk, logger)(createStore);

    const store = createStoreWithMiddleware(reducer);

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

module.exports = App;