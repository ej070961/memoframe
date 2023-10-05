import React from 'react'
import * as l from '../../../styles/LoginStyle'
import {AiFillGoogleCircle} from 'react-icons/ai';
import {SiNaver} from 'react-icons/si';
import {RiKakaoTalkFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
function MemberLoginPage() {

    const navigate = useNavigate();
    return (
        <l.LoginLayout>
        <span className='memoframe'>MemoFrame</span>
        <p className='text'>내 포토부스 홍보하고, 주변 상권과 제휴맺기</p>
        <l.LoginContainer>
            <p className='bigtext'>로그인</p>
            <span className='smalltext'>소셜 로그인 및 이메일로 로그인할 수 있습니다.</span>
            <l.InputContainer name="email" placeholder='Email'></l.InputContainer>
            <l.InputContainer name="password" placeholder='Password'></l.InputContainer>
            <l.LoginButton>이메일로 시작하기</l.LoginButton>
            <l.OrBox>
                <hr/>
                <p> 또는 </p>
                <hr/>
            </l.OrBox>
            <l.SocialContainer>
                <AiFillGoogleCircle className='google' />
                <div className="centered-icon-container" style={{background:'#FBE951'}}>
                <RiKakaoTalkFill className="kakao"/>
                </div>
                <div className="centered-icon-container" style={{background:'#58C038'}}>
                <SiNaver className='naver'/>
                </div>
            </l.SocialContainer>
        </l.LoginContainer>
        <p className='text'>일반 고객 이신가요? <span onClick={()=>navigate('/member/login')}className='hostlogin'>Member 로그인</span></p>
        </l.LoginLayout>
    
    )
}

export default MemberLoginPage;