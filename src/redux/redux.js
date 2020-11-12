import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';


const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer;




// const INITIAL_STATE = {};
// const myReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         number: 120
//       };
//       case 'DECREMENT':
//         return {
//           ...state,
//           number: 100
//         };
//     default:
//       return state;
//   }
// };

// export default myReducer;