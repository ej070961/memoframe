import React, {useState} from 'react'
import * as l from '../../../../styles/LoginStyle'

function EmailLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');



    const handleChange = (e) =>{

        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
            break;
            case 'password':
                setPassword(value);
            break;
            default:
            break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let variable = {
            email: email,
            password: password
        }
        console.log(variable);
        

    }
    return (
        <l.EmailLoginForm>
            <l.InputContainer name="email" placeholder='Email' value={email} onChange={handleChange}></l.InputContainer>
            {/* {emailError && <p style={{ color: 'red' }}>{emailError}</p>} */}
            <l.InputContainer name="password" placeholder='Password' value={password} onChange={handleChange}></l.InputContainer>
            {/* {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>} */}
            <l.ButtonContainer style={{width: '83%'}} onClick={handleSubmit}>로그인</l.ButtonContainer>
        </l.EmailLoginForm>
    )
}

export default EmailLogin