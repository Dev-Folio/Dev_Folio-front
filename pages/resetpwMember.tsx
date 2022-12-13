import React from "react";
import { Button } from "react-bootstrap";

// 이름은 임시 이름으로 했음
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
          <b>회원정보 수정</b>
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
            <br />
            <label>
              <b>이름</b>
            </label>
            <input
              type='text'
              id='name'
              value='김민주'
              readOnly
              style={{ border: "none" }}
            />
            <label>
              <b>학번</b>
            </label>
            <input
              type='text'
              id='id'
              value='202045101@itc.ac.kr'
              readOnly
              style={{ border: "none" }}
            />
            <label>
              <b>비밀번호</b>
            </label>
            <input type='password' id='password' />
            <label>
              <b>비밀번호 확인</b>
            </label>
            <input type='password' id='passwordCheck' />
            <label>
              <b>전화번호</b>
            </label>
            <input
              type='text'
              id='phone'
              value='202045101@itc.ac.kr'
              readOnly
              style={{ border: "none" }}
            />

            <br />

            <Button variant='primary'>회원정보 저장</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
