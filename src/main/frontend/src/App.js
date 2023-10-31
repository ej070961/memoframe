import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from './Components/views/LandingPage/LandingPage';
import MemberLoginPage from './Components/views/Member/LoginPage/MemberLoginPage';
import HostLoginPage from './Components/views/Host/LoginPage/HostLoginPage'
import KakaoRedirect from './Components/auth/KakaoRedirect';
import MemberRegisterPage from './Components/views/Member/RegisterPage/MemberRegisterPage';
import InputProfile from './Components/views/Member/RegisterPage/Section/InputProfile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/member/login" element={<MemberLoginPage/>}/>
        <Route path="/member/register" element={<MemberRegisterPage/>}/>
        <Route path="/member/register/inputprofile" element={<InputProfile/>}/>
        <Route path ="/authkakao" element={<KakaoRedirect/>}/>
        <Route path="/host/login" element={<HostLoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
