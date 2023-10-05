import React, {useState} from 'react'
import * as l from '../../../../styles/LoginStyle'

function EmailLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/; //이메일 정규식
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/ //비밀번호 정규식 

    const emailCheck = (email) => {
        return emailRegEx.test(email); //형식에 맞을 경우, true 리턴
    }

    const passwordCheck = (password) => {
        if(password.match(passwordRegEx)===null) { //형식에 맞지 않을 경우 아래 콘솔 출력
          console.log('비밀번호 형식을 확인해주세요');
          return;
        }else{ // 맞을 경우 출력
          console.log('비밀번호 형식이 맞아요');
        }
    }
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
    return (
        <l.EmailLoginForm>
            <l.InputContainer name="email" placeholder='Email' value={email} onChange={handleChange}></l.InputContainer>
            <l.InputContainer name="password" placeholder='Password' value={password} onChange={handleChange}></l.InputContainer>
            <l.LoginButton>이메일로 시작하기</l.LoginButton>
        </l.EmailLoginForm>
    )
}

export default EmailLogin