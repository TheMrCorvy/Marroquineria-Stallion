import { createStore, combineReducers } from "redux";

import cartReducer from "./reducers/cartReducer";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    category: categoryReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
