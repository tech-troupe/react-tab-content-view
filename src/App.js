import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import ReactTabContentView from './components/ReactTabContentView';
import Store from './stores/store';

class App extends React.Component {
    render() {
      return (
        <Provider store={Store}>
          <div className='App'>
            <ReactTabContentView/>
          </div>
        </Provider>
      ) 
    }
}

export default App;
