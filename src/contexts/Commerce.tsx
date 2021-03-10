import React, { createContext, useState, useEffect, useContext } from "react";

/**
 * Holds Commerce Context actions and data.
 */
export interface CommerceContextInterface {

}

/**
 * Creates the commerce settings context, holding pricing and item data.
 */
export const Context = createContext<CommerceContextInterface>({

});

/**
 * Consumer hook for Commerce Context.
 */
export const useCommerce = () => useContext(Context);

/**
 * Component for the commerce context.
 */
export const CommerceProvider: React.FC = ({ children }) => {
  return <Context.Provider value={{}}>{ children }</Context.Provider>
}