import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { storeFactory } from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// const store = storeFactory();
window.React = React;
// window.store = store;

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, document.getElementById('root'));

ReactDOM.render(
    <App />, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
