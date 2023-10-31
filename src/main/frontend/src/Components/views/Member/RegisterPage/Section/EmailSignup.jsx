import React, {useState} from 'react'
import * as l from '../../../../styles/LoginStyle'
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your backend server's address
});

function EmailSignup() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();


    const onSubmit = async (data) => {

        let variable = {
            email: data.email,
            password: data.password,
            login_type: 1
        }
        console.log(variable);

        try {
            const response = await api.post('/api/member/register', variable);

            if(response.status === 200){ // HTTP 상태 코드가 200인 경우 회원 가입 성공
                if(response.data.registerSuccess===true){
                    console.log(response.data.registerSuccess);
                    console.log(response.data.message);
                    navigate('/member/register/inputprofile', {state: {member_id: response.data.member_id}}) // 프로필 입력창으로 이동
                }else{
                    alert(response.data.message); // 이미 가입된 이메일이면 alert창과 함께 login 페이지로 이동 
                    navigate('/member/login');
                }
            }

        } catch(error) {
            console.error("Error checking the email", error);

        }
        
    }
    return (
        <l.EmailLoginForm onSubmit={handleSubmit(onSubmit)}>
            <l.InputContainer  type="email" name="email" placeholder='Email'
            {...register('email', {
                required: '이메일을 입력하세요',
                pattern: {
                    value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/, //이메일 정규식
                    message: '이메일 형식을 확인해주세요', //이메일 형식 검증 
                }
            })}/>
            {errors.email && <span className="error">{errors.email.message}</span>}

            <l.InputContainer type="password" name="password" placeholder='Password' 
            {...register('password', 
                {required: '비밀번호를 입력하세요',
                pattern: {
                    value: /^[A-Za-z0-9]{8,20}$/, //비밀번호 정규식 
                    message: '알파벳과 숫자를 포함한 최소 8자 이상이어야 합니다', //비밀번호 패턴 검증 
                }
            })}/>
	        {errors.password && <span className="error">{errors.password.message}</span>}
            <l.ButtonContainer style={{width: '83%'}} type="submit">이메일로 시작하기</l.ButtonContainer>
        </l.EmailLoginForm>
    )
}

export default EmailSignup