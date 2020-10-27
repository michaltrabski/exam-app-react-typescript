import React, { useReducer, useContext, createContext } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Context = createContext(initialState);

const GlobalStateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export default GlobalStateProvider;
