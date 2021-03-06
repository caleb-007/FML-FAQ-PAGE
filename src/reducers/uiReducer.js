import {  CLEAR_ERRORS, SET_ERRORS, LOADING_UI, LOADED_UI, VERIFY_EMAIL } from './types';


const initialState = {
  loading: false,
  errors: null,
  message: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case LOADED_UI:
      return {
        ...state,
        loading: false,
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    case VERIFY_EMAIL:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}
