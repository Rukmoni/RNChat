
import { FETCH_USER} from '../types';
const INITIAL_STATE = {
  isLoggedin:false,
 name:'',
 email:'',
 phone:''
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      console.log("FETCH_USER::",payload)
      return {
        ...state,
        name: payload.name,
        email:payload.email,
        phone:payload.phone,
        isLoggedin:true
      };
  
    default:
      return state;
  }
  
};

export default authReducer;