import React from "react";
import { Button } from "react-bootstrap";

export default function resetpw() {
  return (
    <div
      className='body'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          verticalAlign: "center",
        }}
      >
        {/* 이거 폰트 바꾸면 안되나 */}
        <h1>
          <b>비밀번호 재설정</b>
        </h1>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              verticalAlign: "middle",
            }}
          >
            <label>
              <b>학번</b>
            </label>
            <input type='id' id='id' />
            {/* 나중에 scss로 이거 빨간색으로 설정할거양 */}
            <label id='errorMsg'>계정이 존재하지 않습니다.</label>
            <br />

            <Button variant='primary'>인증 이메일 보내기</Button>
          </div>
          <div>
            <u>
              <a href='signup'>회원가입</a>
            </u>
            <u>
              <a href='resetpw'>로그인</a>
            </u>
          </div>
        </div>
      </div>
    </div>
  );
}
