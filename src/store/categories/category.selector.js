/**Este código é escrito em JavaScript e usa a biblioteca reselect para criar seletores memorizados
 * (memoized selectors) em um ambiente Redux. Seletores são funções que calculam algo baseado no
 * estado atual da aplicação Redux. Eles são usados para extrair dados do estado da loja de
 * forma eficiente, evitando cálculos desnecessários. */

import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  console.log("Selector 1 fired");
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    console.log("Selector 2 fired");
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log("Selector 3 fired");
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
