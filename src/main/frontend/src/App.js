import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from './Components/views/Common/LandingPage';
import MemberLoginPage from './Components/views/Member/LoginPage/MemberLoginPage';
import HostLoginPage from './Components/views/Host/LoginPage/HostLoginPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/member/login" element={<MemberLoginPage/>}/>
        <Route path="/host/login" element={<HostLoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
