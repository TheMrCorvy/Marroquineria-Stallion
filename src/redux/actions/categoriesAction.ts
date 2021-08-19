import { SelectCategoryAction, SELECT_CATEGORY } from "../types";

const selectCategory = (selectedCategory: string): SelectCategoryAction => {
    return {
        type: SELECT_CATEGORY,
        payload: selectedCategory,
    };
};

export default selectCategory;
