import React from 'react'
import { ncp_clientid } from '../../../../PersonalData';
import {  NavermapsProvider, Container as MapDiv, NaverMap } from 'react-naver-maps'

function NaverMapAPI() {
  return (
    <NavermapsProvider
        ncpClientId = {ncp_clientid}// 자신의 네이버 계정에서 발급받은 Client ID
        useGovAPI
        error={<p>지도를 불러올 수 없습니다.</p>}
    >
    <MapDiv
      style={{
        width: '60%',
        height: '80vh',
      }}
    >
      <NaverMap />
    </MapDiv>

    </NavermapsProvider>
  )
}

export default NaverMapAPI;