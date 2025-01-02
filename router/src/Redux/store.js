import {configureStore} from "@reduxjs/toolkit";
import slicer from "./slice.js";
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key : "root",
    storage
}

const persist = persistReducer(persistConfig,slicer);

const store = configureStore({
    reducer : {
        slicer : persist
    },
    middleware : (getDefaultMiddleware)=>(
        getDefaultMiddleware({
            serializableCheck : false // required for redux-persist
        })
    )
})

export const persistor = persistStore(store);
export default store


/* Only Redux Store

import {configureStore} from "@reduxjs/toolkit";
import slicer from "./slice.js";

export const store = configureStore({
    reducer : {
        slicer : slicer
    }
})
 */