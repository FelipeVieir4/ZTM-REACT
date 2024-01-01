import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (categoiresArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoiresArray);
