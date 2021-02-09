import {put,takeEvery,call,all,race} from 'redux-saga/effects';
import { FETCH_USER, FETCH_USER_SAGA} from '../types';
export default function request(url, data) {
    const url1="https://app.fakejson.com/q";
    const atts={
        "token": "jh26eFPM8ygpbEIjmt8k4A",
        "data": {
          "name": "nameFirst",
          "email": "internetEmail",
          "phone": "phoneHome"
        }
    }
    return fetch(url1, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          
        },
        body : JSON.stringify(atts)
      })
        .then((res) => res.json())
     
      .catch((err) => ({ err }));
  }
export function* fetchUserSaga(){

  let res=yield call(request)
 
  console.log(res);
  yield put({type:FETCH_USER,payload:res});
 
}

export function* watchFetchUserSaga(){
    yield takeEvery(FETCH_USER_SAGA,fetchUserSaga);
}