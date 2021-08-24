import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import reduxThunk from 'redux-thunk'
import contactReducer from "./reducers/contactReducer";

const middlewares = [reduxThunk];

// if(process.env.NODE_ENV === 'development'){
//     middlewares.push(logger);
// }

const store = createStore(
    contactReducer,
    applyMiddleware(...middlewares)
);

export default store;