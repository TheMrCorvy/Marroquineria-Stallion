import { createStore, combineReducers } from "redux"

import cartReducer from "./reducers/cartReducer"
import productReducer from "./reducers/productReducer"

const rootReducer = combineReducers({
	cart: cartReducer,
	product: productReducer,
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store
