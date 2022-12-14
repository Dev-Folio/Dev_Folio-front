import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";

export default function SignUpDetail() {
  return (
    <div>
      <div>
        <Header />
      </div>
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
          <h1>
            <b>회원가입</b>
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
              <input
                type='text'
                id='id'
                readOnly
                value='202045101@itc.ac.kr'
                style={{ border: "none" }}
              />
              <label>
                <b>이름</b>
              </label>
              <input type='text' id='name' />
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
              <div
                style={{
                  display: "flex",
                  width: "300px",
                  verticalAlign: "middle",
                }}
              >
                <input type='text' id='d' />
                <input type='text' id='c' />
                <input type='text' id='s' />
              </div>
              <br />

              <Button variant='primary'>회원가입</Button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
