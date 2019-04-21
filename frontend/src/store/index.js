import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { connectRouter, routerMiddleware } from "connected-react-router";
import history from "../routes/history";

import reducers from "./ducks";
import sagas from "./sagas";

const middlewares = [];

const persistConfig = {
  key: "meetapp",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);
middlewares.push(routerMiddleware(history));

const tronMiddleware =
  process.env.NODE_ENV === "development"
    ? console.tron.createEnhancer
    : () => {};

const store = createStore(
  connectRouter(history)(persistedReducer),
  compose(
    applyMiddleware(...middlewares),
    tronMiddleware()
  )
);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
