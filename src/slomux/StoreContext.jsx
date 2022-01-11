import { createContext, useContext } from "react";

const StoreContext = createContext();

export function StoreProvider({ store, children }) {
  // TODO: Pass store through context
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
