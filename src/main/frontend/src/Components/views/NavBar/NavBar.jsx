import React, {useState} from 'react'
import * as n from '../../styles/NavStyle'

function NavBar() {

  return (
    <div>
        <n.NavLayout>
            <div>
                <span className='memoframe'>MemoFrame</span>
            </div>
            <div>
                <a href='/member/login' className='a_login'>로그인</a>
        
            </div>
        </n.NavLayout>
    </div>
  )
}

export default NavBar