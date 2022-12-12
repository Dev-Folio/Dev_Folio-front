import Header from "../components/Header";
import React from 'react';
import { Button } from 'react-bootstrap';

export default function login() {

  return (
    <div
    className="body"
    style={{
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height: '100vh'
    }}
    >
        <div
        style={{
            verticalAlign :'center'
        }}>
            <h1>로그인</h1>
            <div>
                <div
                style={{
                    display :'flex',
                    flexDirection :'column',
                    width : '300px',
                    verticalAlign : 'middle'
                }}
                >
                    <label className="font-white">ID</label>
                        <input type="id" id="id" />
                        <label className="font-white">Password</label>
                        <input type="password" id="pw" />
                        <br />
                      
                        <Button variant="primary">Login</Button>
                </div>
                <div>
                    <u><a href="signup">회원가입</a></u>
                    <u><a href="resetpw">비밀번호 재설정</a></u>
                </div>
            </div>

        </div>
    </div>
  )
}


