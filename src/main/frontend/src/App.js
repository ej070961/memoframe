import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from './Components/views/LandingPage/LandingPage';
import MemberLoginPage from './Components/views/Member/LoginPage/MemberLoginPage';
import HostLoginPage from './Components/views/Host/LoginPage/HostLoginPage'
import KakaoRedirect from './Components/auth/KakaoRedirect';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/member/login" element={<MemberLoginPage/>}/>
        <Route path ="/authkakao" element={<KakaoRedirect/>}/>
        <Route path="/host/login" element={<HostLoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
