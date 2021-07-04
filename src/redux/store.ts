import { createStore, combineReducers } from "redux"

import cartReducer from "./reducers/cartReducer"
import productReducer from "./reducers/productReducer"
import userReducer from "./reducers/userReducer"

const rootReducer = combineReducers({
	cart: cartReducer,
	product: productReducer,
	user: userReducer,
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store
