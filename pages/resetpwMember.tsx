import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/ResetPwMember.module.scss";

// 이름은 임시 이름으로 했음
export default function ResetPwMember() {
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
    </div>
  );
}
