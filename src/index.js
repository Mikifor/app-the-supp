import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderDOM = () => {

    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>)
};

rerenderDOM();
debugger;
store.observer(rerenderDOM);
debugger;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
reportWebVitals();
