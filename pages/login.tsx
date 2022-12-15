import Header from "../components/Header";
import axios, { AxiosError } from "axios";
import styles from "../styles/Login.module.scss";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { IForm, IFormValidate } from "../dto";

export default function Login() {
  const router = useRouter();
  const [inputs, setInputs] = useState<IForm>({
    id: "",
    password: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<IFormValidate>({
    id: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const newInputs = {
      ...inputs,
      [name]: e.target.value,
    };
    setInputs(newInputs);
  };

  const validate = () => {
    let validated = true;
    const newErrors: IFormValidate = {
      id: "",
      password: "",
    };

    if (!inputs.id) {
      newErrors.id = "아이디를 입력해주세요";
      validated = false;
    }

    if (!inputs.password) {
      newErrors.password = "비밀번호를 입력해주세요";
      validated = false;
    }

    setErrors(newErrors);
    return validated;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 검증
    if (!validate()) return;

    setSubmitting(true);

    // form data 생성
    const form = new FormData();
    form.append("id", inputs.id);
    form.append("password", inputs.password);

    // 로그인 요청
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login`,
        form
      );

      // 토큰 저장
      const token = response.data.access_token;
      const refToken = response.data.refresh_token;
      localStorage.setItem("token", token);
      localStorage.setItem("refresh_token", refToken);

      // 홈화면으로
      router.replace("/");
    } catch (error) {
      // 사용자 정보가 없을 시
      if (error instanceof AxiosError && error.response?.status === 401) {
        const newErrors = {
          id: " ",
          password: "아이디 또는 비밀번호가 틀렸습니다.",
        };
        setErrors(newErrors);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
        console.error(error);
      }
    }
  };

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
            <b>로그인</b>
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
              <label>ID</label>
              <input
                type='id'
                id='id'
                name='id'
                value={inputs.id}
                onChange={handleChange}
              />
              <label>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                value={inputs.password}
                onChange={handleChange}
              />
              <br />

              <Button variant='primary' id='login'>
                Login
              </Button>
            </div>
            <div className={styles.textalign}>
              <br />
              <u>
                <a href='signup'>회원가입</a>
              </u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
