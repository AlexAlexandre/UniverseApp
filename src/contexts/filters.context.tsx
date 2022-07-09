import React, { createContext, Dispatch, ReactElement, useContext, useState } from 'react';

interface IFiltersContext {
  nameCheck: boolean;
  setNameCheck: Dispatch<React.SetStateAction<boolean>>;
  priceCheck: boolean;
  setPriceCheck: Dispatch<React.SetStateAction<boolean>>;
  rateCheck: boolean;
  setRateCheck: Dispatch<React.SetStateAction<boolean>>;
  downloadCheck: boolean;
  setDownloadCheck: Dispatch<React.SetStateAction<boolean>>;
  rating: number;
  setRating: Dispatch<React.SetStateAction<number>>;
}

type TChildren = { children: ReactElement };

const FiltersContext = createContext<IFiltersContext>({
  nameCheck: false,
  setNameCheck: () => {},
  priceCheck: false,
  setPriceCheck: () => {},
  rateCheck: false,
  setRateCheck: () => {},
  downloadCheck: false,
  setDownloadCheck: () => {},
  rating: 0,
  setRating: () => {},
});

export const FilterProvider = ({ children }: TChildren) => {
  const [nameCheck, setNameCheck] = useState(false);
  const [priceCheck, setPriceCheck] = useState(false);
  const [rateCheck, setRateCheck] = useState(false);
  const [downloadCheck, setDownloadCheck] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <FiltersContext.Provider
      value={{
        nameCheck,
        priceCheck,
        rateCheck,
        downloadCheck,
        rating,
        setNameCheck,
        setPriceCheck,
        setRateCheck,
        setDownloadCheck,
        setRating,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilter = () => useContext(FiltersContext);
