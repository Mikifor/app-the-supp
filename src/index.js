import './index.css'
import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react'
import store from './redux/redux-store'

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderDOM = (state) => {

    root.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)} state={store.getState()} />
        </React.StrictMode>)
}

rerenderDOM()
store.subscribe(() => {rerenderDOM()});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
reportWebVitals()