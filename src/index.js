import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import {Provider} from 'react-redux'
import store from './Services/Store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root'));