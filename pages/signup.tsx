import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";

export default function signup() {
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
              <div
                style={{
                  display: "block",
                }}
              >
                <input type='text' id='id' value='202045101' />{" "}
                <b>@itc.ac.kr</b>
              </div>
              <br />
              <Button variant='primary'>이메일 보내기</Button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
