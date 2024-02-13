import { AnyAction } from '@reduxjs/toolkit';
import { AppState } from '../../@types';

const initialState: AppState = {
  firstColor: '#F0F',
  lastColor: '#0F0',
  direction: '90deg',
  nbColors: 0,
};

function colorReducer(
  state = initialState,
  action: AnyAction = { type: '@@INIT' }
): AppState {
  switch (action.type) {
    case 'CHANGE_FIRST_COLOR':
      return {
        ...state,
        firstColor: action.payload,
        nbColors: state.nbColors + 1,
      };

    case 'CHANGE_LAST_COLOR':
      return {
        ...state,
        lastColor: action.payload,
        nbColors: state.nbColors + 1,
      };

    case 'CHANGE_ALL_COLORS':
      return {
        ...state,
        lastColor: action.payload.lastColor,
        firstColor: action.payload.firstColor,
        nbColors: state.nbColors + 2,
      };

    case 'CHANGE_DIRECTION_TO_270':
      return {
        ...state,
        direction: '270deg',
      };

    case 'CHANGE_DIRECTION_TO_90':
      return {
        ...state,
        direction: '90deg',
      };

    case 'CHANGE_DIRECTION_FUNCTION':
      return {
        ...state,
        direction: action.payload.newDirection,
      };

    case 'CHANGE_DIRECTION':
      return {
        ...state,
        direction: action.payload,
      };

    default:
      return state;
  }
}

export default colorReducer;
