import React , {useState, useEffect} from 'react';
import logo from '../assets/images/logo.png';
import '../assets/css/main.css';

function Login() {

    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
  
    const handleUserId = (e)=> {
        setUserId(e.target.value)
        //console.log(e.target.value)
    }

    const handleUserPw = (e) => {
        setUserPw(e.target.value)
    }

    const submitLogin = () => {
        console.log('Click Login')
        console.log(userId)
        console.log(userPw)
    }

    useEffect(() => {
        console.log('change')
    })

    return (

        <div className="h-full bg-blue login-wrap">
            <div className="logind">
                <h1 className="login__logo">
                    <img src={logo} alt="로고" />통합 메세지 관리 시스템
                </h1>
                <div className="login-input-box">
 
                    <div className="common-input login-input-box__id">
                        <label htmlFor="userId" className="hidden">아이디 입력</label>
                        <input type="text"  id="userId" value={userId} onChange={handleUserId}
                        placeholder="이메일(아이디) 주소 입력"/>
                    </div>
                    <div className="common-input login-input-box__pw">
                        <label htmlFor="userPw" className="hidden">비밀번호 입력</label>
                        <input type="password" id="userPw"  value={userPw} onChange={handleUserPw}
                        placeholder="비밀번호 입력" />
                        <button type="button" className="eye-btn visible-btn">비밀번호 보이기</button>
                    </div>
                    <p className="login-input-box__notice">
                    ※비밀번호가 기억나지 않으실 경우 관리자에게 문의바랍니다.
                    </p>
                    <div className="common-check">
                        <input type="checkbox" id="idSave" />
                        <label htmlFor="idSave">아이디 기억하기</label>
                    </div>
                </div>
                <button type="button" className="blue-btn login-btn" onClick={submitLogin}>로그인</button>
                <p className="copyright">copyrihgt &copy; KT META All rights reserved.</p>
            </div>
        </div>
  
    )
}

export default Login;