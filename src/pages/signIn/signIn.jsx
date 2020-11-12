import React, { useState } from 'react';
import InputField from '../../components/extraPageComponents/inputField/inputField';
import './signIn.scss';
import login from '../../components/signInPageComponents/login.svg'
import { connect } from 'react-redux';
import { signInAction, signOutAction } from '../../redux/user/user.actions'


const SignIn = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('')
    const requestSignIn = (() => {
        fetch('https://ela-student.herokuapp.com/account/api/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setToken(data.token)
            })
            .catch(err => console.log(err))
    })
    return (
        <div className="sign-in">
            <div className="left-sign-in">
                <img src={login} alt="" />
                <h1>Sign into your account</h1>
            </div>
            <div className="right-sign-in">
                <h1>Sign In</h1>
                <InputField name="username" placeholder="Enter valid username" type="text" field={username} body={setUsername} />
                <InputField name="password" placeholder="Enter valid password" type="password" field={password} body={setPassword} />
                {/* <section>
                    <input type="checkbox" name="remember" value="remember" />
                    <label htmlFor="remember" id="remember-label">Remember me</label>
                </section> */}
                <button onClick={async() => {
                    await requestSignIn()
                    props.signInDispatch(token)
                }}>Log In</button>
                <button onClick={() => {
                    props.signOutDispatch()
                }}>Log Out</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signInDispatch: token => dispatch(signInAction(token)),
    signOutDispatch: token => dispatch(signOutAction(token))
})

export default connect(null, mapDispatchToProps)(SignIn);