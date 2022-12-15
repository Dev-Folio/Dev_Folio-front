import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { object, string } from "yup";
import Header from "../components/Header";

const schema = object({
  id: string().required("아이디를 입력해주세요"),
});

export default function SignUp() {
  const [mobile, setMobile] = useState("010");

  function onMobileSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    setMobile(e.target.value);
  }

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              verticalAlign: "middle",
            }}
          >
            <Form>
              <Form.Group>
                <label>
                  <b>이메일</b>
                </label>
                <Form.Control
                  type='text'
                  placeholder='학번@itc.ac.kr'
                  name='id'
                  // value={inputs.id}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <label>
                  <b>이름</b>
                </label>
                <Form.Control
                  type='text'
                  placeholder='홍길동'
                  name='name'
                  // value={inputs.id}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <label>
                  <b>비밀번호</b>
                </label>
                <Form.Control
                  type='password'
                  name='password'
                  // value={inputs.id}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <label>
                  <b>비밀번호 확인</b>
                </label>
                <Form.Control
                  type='password'
                  name='passdwordcheck'
                  // value={inputs.id}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <label>
                  <b>전화번호</b>
                </label>
                <InputGroup>
                  <Form.Select onChange={onMobileSelect}>
                    <option value='010'>010</option>
                    <option value='010'>011</option>
                  </Form.Select>
                  <Form.Control type='text' placeholder='1998' />
                  <Form.Control type='text' placeholder='1222' />
                </InputGroup>
              </Form.Group>
              <br />

              <Button variant='primary' type='submit'>
                회원가입
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
