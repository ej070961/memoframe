import React, {useState,useRef} from 'react'
import * as l from '../../../../styles/LoginStyle'
import { useNavigate, useLocation} from 'react-router-dom';
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your backend server's address
});

function InputProfile() {

    const navigate = useNavigate();
    const location = useLocation();
    const userinfo = {...location.state}; //useLocation으로 EmailSignup 컴포넌트에서 보낸 state값을 받아옴

    const fileInput = useRef(null);
    const [Nickname, setNickname] = useState('');
    const [ProfileImg, setProfileImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")

    const onChange = (e) => {
        if(e.target.files[0]){
             //화면에 프로필 사진 표시
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    setProfileImg(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const handleChange = (e) =>{
        setNickname(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //서버에 보낼 data 설정 
        let variable = {
            member_id: userinfo.member_id,
            profileimage: ProfileImg,
            nickname: Nickname
        }
        console.log(variable);

        try {
            //서버 요청
            const response= await api.post('/api/member/saveProfile', variable);
            //서버 응답 후 처리 
            if(response.status === 200){
                alert("프로필 등록 완료!");
                navigate('/');
            } else {
                alert('회원가입 중 오류가 발생하였습니다.');
                console.error(response.data);
            }
        } catch(error) {
            console.error("Error registering the user", error);
        }


    }
       
    return (
        <l.LoginLayout>
            <l.LoginContainer style={{marginTop: '7rem'}}>
                <p className='bigtext'>회원정보 입력</p>
                <l.InputLabel>프로필 이미지</l.InputLabel>
                <input 
                    type='file' 
                        style={{display:'none'}}
                        accept='image/jpg,impge/png,image/jpeg' 
                        name='profile_img'
                        onChange={onChange}
                        ref={fileInput}/>
                <img src={ProfileImg} style={{borderRadius: '50%'}} alt='' height={190} width={190} onClick={()=>{fileInput.current.click()}} ></img>
     
                <l.InputLabel>닉네임</l.InputLabel>
                <l.InputContainer type="text" value={Nickname} onChange={handleChange}/>
                <l.ButtonContainer style={{width: '60%'}} onClick={handleSubmit}>
                    입력완료
                </l.ButtonContainer>

            </l.LoginContainer>
        </l.LoginLayout>
    )
  
}

export default InputProfile;