'use client';

import React, { Dispatch, Suspense, createContext, useReducer } from 'react';

type StateType = {
  count: number; // FIXME: update this state when actual implementation is done...
};

type ActionType = {
  type: string;
  payload?: any;
};

const initialState: StateType = {
  count: 0,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export const GlobalContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
