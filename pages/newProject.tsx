import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import { useRef } from "react";

export default function newProject() {
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
        <div className='basicProfile'>썸네일, 이름, 유저, 기간</div>
        <div>기술스택, 주소, 설명</div>
        <div>에디터</div>
        <Button> 등록하기 </Button>
      </div>
    </div>
  );
}
