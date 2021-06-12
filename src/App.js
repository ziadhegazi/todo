import React from 'react'
import AddTask from "./components/addTask"
import {Provider} from "react-redux"
import store from "./store"
import './App.css';
import ListTask from './components/listTask';

const App = () => {

  return (
    <Provider store={store}>
      <div className="App">
        <AddTask></AddTask>
        <ListTask></ListTask>
      </div>
    </Provider>
  );
}

export default App;
