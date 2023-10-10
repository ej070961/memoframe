import React from 'react'
import * as l from '../../../styles/LoginStyle'
import SocialLogin from '../LoginPage/Section/SocialLogin'
import EmailSignup from './Section/EmailSignup'
import { useNavigate } from 'react-router-dom'
function MemberRegisterPage() {
    const navigate = useNavigate();
    return(
    <l.LoginLayout>
    <span className='memoframe'>MemoFrame</span>
    <p className='text'>내 주변 포토부스를 한눈에 조회하고, 나의 사진 기록하기</p>
    <l.LoginContainer>
        <p className='bigtext'>회원가입</p>
        <span className='smalltext'>소셜계정 및 이메일로 회원가입 할 수 있습니다.</span>
        <EmailSignup/>
        <l.OrBox>
          <hr/>
          <p> 또는 </p>
          <hr/>
        </l.OrBox>
        <SocialLogin/>
    </l.LoginContainer>
    <p className='bottomtext'>계정이 있나요? <span onClick={()=>navigate('/member/login')} className='hostlogin'>로그인</span></p>
    <p className='bottomtext'>host이신가요? <span onClick={()=>navigate('/host/login')} className='hostlogin'>host 회원가입</span></p>
  </l.LoginLayout>
    )

   
}

export default MemberRegisterPage