import React, { useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/NewProject.module.scss";

// toast ui
import dynamic from "next/dynamic";
// import { Editor } from "@toast-ui/react-editor";
// import "@toast-ui/editor/dist/toastui-editor.css";
// import { v4 as uuidv4 } from "uuid";
// import S3 from "react-aws-s3-typescript";

export default function NewProject() {
  const ToastEditor = dynamic(() => import("../components/ToastEditor"), {
    ssr: false,
  });
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div>썸네일, 이름, 유저, 기간</div>
        <div>기술스택, 주소, 설명</div>
        <>
          <ToastEditor />
        </>
        <Button> 등록하기 </Button>
      </div>
    </>
  );
}
