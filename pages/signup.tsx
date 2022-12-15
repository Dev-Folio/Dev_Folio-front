import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/SignUp.module.scss";

export default function SignUp() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.container}>
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
              <input type='text' id='id' />
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
