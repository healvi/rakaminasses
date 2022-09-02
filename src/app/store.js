import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alertReducer from "../redux/alertRedux";
import modalReducer from "../redux/modalRedux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['favorites'] 
};
const rootReducer = combineReducers({
  alerts: alertReducer,
  modals: modalReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export const persistor = persistStore(store);