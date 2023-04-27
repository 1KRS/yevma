import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favMeals, setFavMeals] = useState([]);

  const addFavorite = (id) => {
    setFavMeals((currentFavMeals) => [...currentFavMeals, id]);
  };
  const removeFavorite = (id) => {
    setFavMeals((currentFavMeals) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favMeals,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
