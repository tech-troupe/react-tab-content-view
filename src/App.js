import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import ReactTabContentView from './components/ReactTabContentView';
import { createStore, applyMiddleware } from 'redux';
import userActionReducer from './stores/UserActionReducer';
import logger from 'redux-logger';

const initialState  = {
  allTitles: ["title1", "title2", "title3","title4"],
  displayedTitles:["title1", "title2", "title3","title4"],
  data:[
      {
          "title":"title1",
          "content":"content1"
      },
      {
          "title":"title2",
          "content":"content2"
      },
      {
          "title":"title3",
          "content":"content3"
      },
      {
          "title":"title4",
          "content":"content4"
      },
  ],
  allTabs:['title1', 'title2'],
  activeTitle:'title2',
  closedTitle:null
};

const middlewares = [logger];
const store = createStore(userActionReducer, initialState, applyMiddleware(...middlewares));
prepareData(initialState);
const store = createStore(userActionReducer, initialState, applyMiddleware(...middlewares));

function prepareData() {
  let titleId = 1;
  initialState.data.map((group, i) => {
    initialState.data[i] = {...group, titleId}
    titleId++;
  });
  console.log(initialState);
}

class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <div className='App'>
            <ReactTabContentView/>
          </div>
        </Provider>
      ) 
    }
}

export default App;
