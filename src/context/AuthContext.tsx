import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
  isloggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const initialAuthState: AuthState = {
  isloggedIn: false,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeIcon: (icon: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  const signIn = () => {
    dispatch({ type: 'sign-in' });
  };

  const changeIcon = (icon: string) => {
    dispatch({ type: 'change-icon', payload: { icon } });
  };

  const logout = () => {
    dispatch({ type: 'log-out' });
  };

  return (
    <AuthContext.Provider value={{ authState, signIn, changeIcon, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
