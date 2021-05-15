import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'sign-in' }
  | { type: 'change-icon'; payload: { icon: string } }
  | { type: 'log-out' };

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'sign-in':
      return {
        ...state,
        isloggedIn: true,
        username: 'tom',
      };
    case 'change-icon':
      return {
        ...state,
        favoriteIcon: action.payload.icon,
      };
    case 'log-out':
      return {
        isloggedIn: false,
      };
    default:
      return state;
  }
};
