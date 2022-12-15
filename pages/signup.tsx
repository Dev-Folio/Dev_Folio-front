import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import { object, string } from "yup";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { Values } from "../dto";
import { FormikHelpers } from "formik";

const schema = object({
  id: string().required("아이디를 입력해주세요"),
});

export default function SignUp() {
  const router = useRouter();

  const handleSubmit = async (
    values: Values,
    { setSubmitting, setErrors }: FormikHelpers<Values>
  ) => {
    setSubmitting(true);

    console.log("submit!");
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/signup/check`,
        {
          params: { id: values.id },
        }
      );
      console.log(response);
      const status: number = response.data.status;
      // id 사용 가능
      if (status === 1700) {
        router.push(`/auth/signup/info`, { query: { id: values.id } });
      }
      // id 중복
      else if (status === 1701) {
        setErrors({ id: "이미 사용중인 아이디입니다" });
      }
      // id 형식에 맞지 않음
      else if (status === 1702) {
        setErrors({ id: "아이디 형식에 맞지 않습니다" });
      }
    } catch (error) {}

    setSubmitting(false);
  };

  function passwordCheck() {
    let password = document.getElementById("password");
    let passwordCheck = document.getElementById("passwordCheck");

    if (!password == passwordCheck) {
      alert("비밀번호를 다시 확인해주세요");
    }
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
              <input type='password' id='password' name='password' />
              <label>
                <b>비밀번호 확인</b>
              </label>
              <input type='password' id='passwordCheck' name='passwordCheck' />
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

              <Button variant='primary' onClick={passwordCheck()}>
                회원가입
              </Button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
