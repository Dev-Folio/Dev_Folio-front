import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/ResetPw.module.scss";

export default function ResetPw() {
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
              <label id='errorMsg' className={styles.errorMsg}>
                계정이 존재하지 않습니다.
              </label>
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
    </div>
  );
}
