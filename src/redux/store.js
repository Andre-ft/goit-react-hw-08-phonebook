import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { contactApi } from './contacts/contactsSlice';
import { authReducer } from './auth';
import { contactsReducer } from './contacts';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactReducer),
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];

//     case DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// const rootReducer = combineReducers({ contacts: contactReducer });

// const store = createStore(rootReducer, composeWithDevTools());

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // contactApi.middleware,
  // logger,
];

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, contactReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistor = persistStore(store);

// export default { store, persistor };
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// setupListeners(store.dispatch);
export const persistor = persistStore(store);
