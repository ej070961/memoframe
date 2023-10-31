import React, {useState} from 'react'
import * as l from '../../../../styles/LoginStyle'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your backend server's address
});
function EmailSignup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/; //이메일 정규식
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/ //비밀번호 정규식

    const emailCheck = (email) => {
        return emailRegEx.test(email); //형식에 맞을 경우, true 리턴
    }

    const passwordCheck = (password) => {
        if(password.match(passwordRegEx)===null) { //형식에 맞지 않을 경우 아래 콘솔 출력
          return false;
        }else{ // 맞을 경우 출력
          return true;
        }
    }
    const handleChange = (e) =>{

        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                setEmailError('');
            break;
            case 'password':
                setPassword(value);
                setEmailError('');
            break;
            default:
            break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!emailCheck(email)){
            alert('이메일 형식을 확인해주세요');
            return; //내가 추가
        }

        if (!passwordCheck(password)) {
            alert('비밀번호는 영문대소문자, 숫자 포함 8자리 이상이어야 합니다. 비밀번호 형식을 확인해주세요');
            return;//추가
        }

        //이메일과 비밀번호가 모두 형식에 맞을 경우
        if (emailCheck(email) && passwordCheck(password)) {

            let variable = {
                email: email,
                password: password
            }
            console.log(variable);

            try {
                const response = await api.post('/api/member/finduser', variable);

                if(response.data.existedUser){
                    alert('This email is already registered!');
                    navigate('/member/login');
                } else {

                    navigate('/member/register/inputprofile',
                        {state: {email: email, password: password}});
                }

            } catch(error) {
                console.error("Error checking the email", error);
            }
        }

    }
    return (
        <l.EmailLoginForm>
            <l.InputContainer name="email" placeholder='Email' value={email} onChange={handleChange}></l.InputContainer>
            {/* {emailError && <p style={{ color: 'red' }}>{emailError}</p>} */}
            <l.InputContainer name="password" placeholder='Password' value={password} onChange={handleChange}></l.InputContainer>
            {/* {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>} */}
            <l.ButtonContainer style={{width: '83%'}} onClick={handleSubmit}>이메일로 시작하기</l.ButtonContainer>
        </l.EmailLoginForm>
    )
}

export default EmailSignup