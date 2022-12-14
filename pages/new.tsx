import React, { useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/NewProject.module.scss";

// image
import Image from "next/image";

// toast ui
import dynamic from "next/dynamic";

//버퍼가 없다는 오류 해결을 위한 코드
window.Buffer = window.Buffer || require("buffer").Buffer;

export default function NewProject() {
  const ToastEditor = dynamic(() => import("../components/ToastEditor"), {
    ssr: false,
  });
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.flextLayout}>
          <Image
            className={styles.imageMargin}
            src='/sample_image.png'
            alt='logo'
            width={250}
            height={320}
            priority
          />
          <div>
            <label>
              <b>프로젝트 이름</b>
            </label>
            <br />
            <input type='text' id='name' />
            <br />
            <label>
              <b>함께한 사람</b>
            </label>
            {/* text가 써지는 순간 검색이 작동됨. 그 때 바로 드롭다운이 보여지게 해야 함 */}
            <input type='text' id='name' className={styles.memberTag} />
            <br />
            <label>
              <b>프로젝트 기간</b>
            </label>
            <br />
            <input type='date' id='startDate' /> -{" "}
            <input type='date' id='finishDate' />
          </div>
        </div>

        <div className={styles.blockLayout}>
          <label>
            <b>기술스택</b>
          </label>
          {/* text가 써지는 순간 검색이 작동됨. 그 때 바로 드롭다운이 보여지게 해야 함 */}
          <input type='text' id='name' className={styles.memberTag} />
          <label>
            <b>깃허브 주소</b>
          </label>
          <br />
          <input type='url' id='giturl' />
          <br />
          <label>
            <b>프로젝트 설명</b>
          </label>
          <br />
          <textarea></textarea>
        </div>
        <>
          <ToastEditor />
        </>
        <Button> 등록하기 </Button>
      </div>
    </>
  );
}
