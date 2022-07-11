import React, { createContext, Dispatch, ReactElement, useContext, useState } from 'react';

interface IFiltersContext {
  sortBy: string;
  rating: number;
  setSortBy: Dispatch<React.SetStateAction<string>>;
  setRating: Dispatch<React.SetStateAction<number>>;
}

type TChildren = { children: ReactElement };

const FiltersContext = createContext<IFiltersContext>({
  sortBy: '',
  rating: 0,
  setSortBy: () => {},
  setRating: () => {},
});

export const FilterProvider = ({ children }: TChildren) => {
  const [sortBy, setSortBy] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <FiltersContext.Provider
      value={{
        sortBy,
        rating,
        setSortBy,
        setRating,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilter = () => useContext(FiltersContext);
