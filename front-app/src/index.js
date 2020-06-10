import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import App from './App';
import './index.css';
import reducers from './reducers';
import { hos } from './actions'
// import {getNearHospitals, getNearHosByStar, getHosSearchList} from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(hos.likeHos(10))
// .then(() =>
//   console.log(store.getState().hos)
// )

// unsubscribe()

ReactDOM.render(

  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>,
  document.querySelector("#root")
);


