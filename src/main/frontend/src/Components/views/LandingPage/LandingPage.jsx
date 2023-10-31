import React from 'react'
import NavBar from '../NavBar/NavBar'
import NaverMapAPI from './Section/NaverMapAPI'
import * as l from '../../styles/LandingpageStyle'

function LandingPage() {
  return (
    <l.LandingLayout>
      <NavBar/>
      <l.MapInfoWrapper>
        <div style={{width: '40%', display:'flex', flexDirection:'column'}}>
          <l.SearchInput className='mapinfo_search' type="text" placeholder="주소 검색"/>
          <l.ResultContainer>
            <span className='mapinfo_text'>검색 결과</span>
            <hr/>
          </l.ResultContainer>
        </div>
        <NaverMapAPI/>
      </l.MapInfoWrapper>
    </l.LandingLayout>
  )
}

export default LandingPage