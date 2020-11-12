import React from 'react';
import InputField from '../../components/extraPageComponents/inputField/inputField';
import login from '../../components/signInPageComponents/login.svg'
import './signup.scss';

const SignUp = () => {
    return (
        <div className="sign-up">
            <div className="left-sign-in">
                <img src={login} alt=""/>
                <h1>Sign into account</h1>
            </div>
            <div className="right-sign-in">

                <h1>Sign Up</h1>
                <InputField name="email" placeholder="Enter valid email" type="email" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />                
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />                
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />                
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />                
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />                

                <section>
                </section>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp;