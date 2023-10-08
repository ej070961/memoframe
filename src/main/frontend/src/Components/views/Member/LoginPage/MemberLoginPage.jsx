import React from 'react'
import * as l from '../../../styles/LoginStyle'
import { useNavigate } from 'react-router-dom';
import SocialLogin from './Section/SocialLogin';
import EmailLogin from './Section/EmailLogin';
function MemberLoginPage() {
  
  const navigate = useNavigate();


  return (
    <l.LoginLayout>
      <span className='memoframe'>MemoFrame</span>
      <p className='text'>내 주변 포토부스를 한눈에 조회하고, 나의 사진 기록하기</p>
      <l.LoginContainer>
          <p className='bigtext'>로그인</p>
          <span className='smalltext'>소셜 로그인 및 이메일로 로그인 할 수 있습니다.</span>
          <EmailLogin/>
          <l.OrBox>
            <hr/>
            <p> 또는 </p>
            <hr/>
          </l.OrBox>
          <SocialLogin/>
      </l.LoginContainer>
      <p className='bottomtext'>계정이 없나요? <span onClick={()=>navigate('/member/register')} className='hostlogin'>회원가입</span></p>
      <p className='bottomtext'>host이신가요? <span onClick={()=>navigate('/host/login')} className='hostlogin'>host 로그인</span></p>
    </l.LoginLayout>
  
  )
}

export default MemberLoginPage;