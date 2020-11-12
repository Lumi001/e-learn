import React from 'react';
import './App.css';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signup/signUp';
import Dashboard from './pages/dashboard/dashboard';
import { connect } from 'react-redux';

// const firstAction = (number) => {
//   return {
//     type: 'INCREMENT',
//   };
// }
// const secondAction = (number) => {
//   return {
//     type: 'DECREMENT',
//   };
// }





function App(props) {
  return (
    


    <div>
      <SignIn/>
      {/* <SignUp/> */}
      {/* <Dashboard/> */}
    </div>

  );
}
const mapDispatchToProps = dispatch => ({
  // firstAction: number => dispatch(firstAction(number)),
  // secondAction: number => dispatch(secondAction(number))
})

const mapStateToProps = state => ({
  number: state.number
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
