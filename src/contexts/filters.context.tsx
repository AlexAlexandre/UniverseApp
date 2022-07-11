import React, { createContext, Dispatch, ReactElement, useContext, useState } from 'react';

interface IFiltersContext {
  universeFiltered: string;
  sortBy: string;
  rating: number;
  setUniverseFiltered: Dispatch<React.SetStateAction<string>>;
  setSortBy: Dispatch<React.SetStateAction<string>>;
  setRating: Dispatch<React.SetStateAction<number>>;
}

type TChildren = { children: ReactElement };

const FiltersContext = createContext<IFiltersContext>({
  universeFiltered: '',
  sortBy: '',
  rating: 0,
  setUniverseFiltered: () => {},
  setSortBy: () => {},
  setRating: () => {},
});

export const FilterProvider = ({ children }: TChildren) => {
  const [sortBy, setSortBy] = useState('');
  const [rating, setRating] = useState(0);
  const [universeFiltered, setUniverseFiltered] = useState('All');

  return (
    <FiltersContext.Provider
      value={{
        universeFiltered,
        sortBy,
        rating,
        setUniverseFiltered,
        setSortBy,
        setRating,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilter = () => useContext(FiltersContext);
