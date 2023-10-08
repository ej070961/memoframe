import React, {useState,useRef} from 'react'
import * as l from '../../../../styles/LoginStyle'
import { useNavigate } from 'react-router-dom';
function InputProfile() {

    const navigate = useNavigate();

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

    const handleSubmit = (e) => {
        e.preventDefault();

        let variable = {
            ProfileImg: ProfileImg,
            Nickname: Nickname
        }

        console.log(variable);
        navigate('/');

        
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

export default InputProfile