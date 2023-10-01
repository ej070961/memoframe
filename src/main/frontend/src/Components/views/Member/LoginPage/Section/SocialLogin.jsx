import React from 'react'
import * as l from '../../../../styles/LoginStyle'
import {AiFillGoogleCircle} from 'react-icons/ai';
import {SiNaver} from 'react-icons/si';
import {RiKakaoTalkFill} from 'react-icons/ri'

import {kakao_redirect_uri, kakao_rest_api_key} from'../../../../../PersonalData'
function SocialLogin() {
    
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao_rest_api_key}&redirect_uri=${kakao_redirect_uri}&response_type=code`
  
    const SocialKakao= () => {
        window.location.href = kakaoURL;
        
    }
    return (
    <l.SocialContainer>
        <AiFillGoogleCircle className='google' />
        <div className="centered-icon-container" style={{background:'#FBE951'}}>
        <RiKakaoTalkFill className="kakao" onClick={SocialKakao}/>
        </div>
        <div className="centered-icon-container" style={{background:'#58C038'}}>
        <SiNaver className='naver'/>
        </div>
    </l.SocialContainer>
  )
}

export default SocialLogin