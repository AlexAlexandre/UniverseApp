import React, { createContext, Dispatch, ReactElement, useContext, useState } from 'react';

interface IFirstAccessContext {
  firstAccess: boolean;
  setFirstAccess?: Dispatch<React.SetStateAction<boolean>>;
}

type TChildren = { children: ReactElement };

const FirstAccessContext = createContext<IFirstAccessContext>({ firstAccess: true });

export const FirstAccessProvider = ({ children }: TChildren) => {
  const [firstAccess, setFirstAccess] = useState(true);

  return <FirstAccessContext.Provider value={{ firstAccess, setFirstAccess }}>{children}</FirstAccessContext.Provider>;
};

export const useFirstAccess = () => useContext(FirstAccessContext);
