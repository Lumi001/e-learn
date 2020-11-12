import React, { useState } from 'react';
import InputField from '../../components/extraPageComponents/inputField/inputField';
import login from '../../components/signInPageComponents/login.svg'
import './signup.scss';

const SignUp = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [full_name, setFullname] = useState('');
    const [department, setDepartment] = useState('');
    const [level, setLevel] = useState('');
    const [matric_number, setMatric] = useState('');

    const requestSignUp = (() => {
        fetch('https://ela-student.herokuapp.com/account/api/register/student', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                username: username,
                full_name: full_name,
                password: password,
                department: department,
                level: level,
                matric_number: matric_number
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    })
    return (
        <div className="sign-up">
            <div className="left-sign-in">
                <img src={login} alt=""/>
                <h1>Sign into account</h1>
            </div>
            <div className="right-sign-in">

                <h1>Sign Up</h1>
                <InputField name="email" placeholder="Email" type="email" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" field={email} body={setEmail}/>
                <InputField name="username" placeholder="Username" type="text" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" field={username} body={setUsername} />                
                <InputField name="full_name" placeholder="Full Name" type="text" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" field={full_name} body={setFullname}/>                
                <InputField name="password" placeholder="Enter valid password" type="password" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" field={password} body={setPassword} />                
                <InputField name="department" placeholder="Department" type="text" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" field={department} body={setDepartment}/>                
                <InputField name="level" placeholder="Level" type="number" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" field={level} body={setLevel} />                
                <InputField name="matric_munber" placeholder="Enter Matric Number" type="text" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" field={matric_number} body={setMatric} />                

                <section>
                </section>
                <button onClick={async() => {
                    await requestSignUp()
                }}>Log In</button>
            </div>
        </div>
    );
};

export default SignUp;