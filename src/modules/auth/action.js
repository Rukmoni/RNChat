import { FETCH_USER_SAGA } from '../types';
export const actionFetchUser = () => {
    console.log("CartActions");
      return { type: FETCH_USER_SAGA };
    };