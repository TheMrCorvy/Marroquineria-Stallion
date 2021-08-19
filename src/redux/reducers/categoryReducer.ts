import { CategoryState, SELECT_CATEGORY, SelectCategoryAction } from "../types";

const initialState = {
    category: "",
};

const categoryReducer = (
    state = initialState,
    action: SelectCategoryAction
): CategoryState => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                category: action.payload,
            };

        default:
            return state;
    }
};

export default categoryReducer;
