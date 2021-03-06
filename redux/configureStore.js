import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { recipes } from "./recipesReducer";
import { favorites } from "./favoritesReducer";
import { blogs } from "./blogsReducer";
import { mealplan } from "./mealplanReducer";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";

const config = {
  key: "root",
  storage,
  debug: true,
};

/**const rootReducer = combineReducers({
  recipes: recipes,
}); */

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      recipes,
      favorites,
      blogs,
      mealplan,
    }),
    applyMiddleware(thunk, logger)
  );
  const persistor = persistStore(store);

  return { persistor, store };
};
