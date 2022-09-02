import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alertReducer from "../redux/alertRedux";
import modalReducer from "../redux/modalRedux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "../redux/todoRedux";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['favorites'] 
};
const rootReducer = combineReducers({
  alerts: alertReducer,
  modals: modalReducer,
  todos : todoReducer
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