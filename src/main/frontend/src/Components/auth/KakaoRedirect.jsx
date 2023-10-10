import React from 'react'

function KakaoRedirect() {
  const code = new URL(window.location.href).searchParams.get("code"); //인가코드 추출하기
  console.log(code);
  return (
    <div>카카오 로그인 중...</div>
  )
}

export default KakaoRedirect;