import React, { createContext, Dispatch, ReactElement, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IFirstAccessContext {
  firstAccess: boolean;
  setFirstAccess?: Dispatch<React.SetStateAction<boolean>>;
}

type TChildren = { children: ReactElement };

const FirstAccessContext = createContext<IFirstAccessContext>({ firstAccess: true });

export const FirstAccessProvider = ({ children }: TChildren) => {
  const [firstAccess, setFirstAccess] = useState(true);

  const getStorage = async () => {
    const firstAccessStorage = await AsyncStorage.getItem('@RNUniverse:firstAccess');
    if (firstAccessStorage) {
      setFirstAccess(JSON.parse(firstAccessStorage));
    }
  };

  useEffect(() => {
    getStorage();
  });

  return <FirstAccessContext.Provider value={{ firstAccess, setFirstAccess }}>{children}</FirstAccessContext.Provider>;
};

export const useFirstAccess = () => useContext(FirstAccessContext);
