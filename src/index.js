import React from 'react';
import ReactDOM from 'react-dom';
/*import './index.css';*/
/*import TodoList from './TodoList';*/
/*import App from './App';*/
import * as serviceWorker from './serviceWorker';
import TodoList2 from "./TodoList2";
import { Provider } from 'react-redux';
import store from './store1';

const App = (
    <Provider store = {store}>
        <TodoList2 />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
serviceWorker.unregister();
