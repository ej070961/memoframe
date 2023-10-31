import styled from "styled-components";

export const LoginLayout = styled.div`
    width: 100%;
    height: 100vh;
    background: #E8EBED;
    display: flex;
    flex-direction: column;
    align-items: center;

    .memoframe{
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        font-size: 2.2rem;
        margin: 1rem;
    }
    .text{
        color: #000;
        margin-top: 1rem;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .bottomtext{
        color: #000;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin:0.3rem;

    }
    .hostlogin{
        cursor: pointer;
    }
`

export const LoginContainer = styled.div`
    width: 35rem;
    height: 32rem;
    border-radius: 20px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    .bigtext{
        color: #000;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

    }
    .smalltext{
        width: 29rem;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #26282B;
        margin-bottom: 1rem;

    }

`
export const EmailLoginForm = styled.form`
    width: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .error{
        width: 82%;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        color: #9B111E;
    }
  
`
export const InputLabel = styled.label`
    width: 83%;
    color: #000;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
`
export const InputContainer = styled.input`
    margin-top: 0.8rem;
    width: 82%;
    height: 2.7rem;
    border: 1px solid #D9D9D9;
    background: #FFF;

    color: #000;
    font-family: 'Noto Sans', sans-serif;
    padding-left: 0.1rem;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

   

  
`

export const ButtonContainer = styled.button`
    margin-top: 1rem;
    height: 2.7rem;
    background: #26282B;

    color: #FFF;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const OrBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    align-items: center;

    hr{
        height: 0.03rem;
        width: 40%;
        background: #26282B;
    }
    p{
        font-family: 'Noto Sans KR', sans-serif;
    }

`
export const SocialContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    .google{
        font-size: 4rem;
        color: #D95140;
    }
    .centered-icon-container {
        display: flex;
        justify-content: center; /* 수평 가운데 정렬 */
        align-items: center; /* 수직 가운데 정렬 */
        background: #58C038;
        border-radius: 50%;
        width: 3.5rem;
        height: 3.5rem;
      }

    .kakao{
        font-size: 2.8rem;
    }
    .naver{
        font-size: 1.8rem;
        color: #FFF;
    }
`