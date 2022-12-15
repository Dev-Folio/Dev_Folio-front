import React, { useRef, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/NewProject.module.scss";

// image
import Image from "next/image";

// toast ui
import dynamic from "next/dynamic";

export default function NewProject() {
  const ToastEditor = dynamic(() => import("../components/ToastEditor"), {
    ssr: false,
  });

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Form>
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
              <Form.Group>
                <label>
                  <b>프로젝트 이름</b>
                </label>
                <br />
                <Form.Control type='text' />
              </Form.Group>
              <br />
              <Form.Group>
                <label>
                  <b>함께한 사람</b>
                </label>
                {/* text가 써지는 순간 검색이 작동됨. 그 때 바로 드롭다운이 보여지게 해야 함 */}
                <Form.Control type='text' className={styles.memberTag} />
              </Form.Group>
              <br />
              <Form.Group>
                <label>
                  <b>프로젝트 기간</b>
                </label>
                <br />
                <Form.Control type='date' placeholder='시작일' /> -
                <Form.Control type='date' placeholder='마감일' />
              </Form.Group>
            </div>
          </div>
          <div className={styles.blockLayout}>
            <Form.Group>
              <label>
                <b>기술스택</b>
              </label>
              {/* text가 써지는 순간 검색이 작동됨. 그 때 바로 드롭다운이 보여지게 해야 함 */}
              <Form.Control type='text' className={styles.memberTag} />
            </Form.Group>
            <Form.Group>
              <label>
                <b>깃허브 주소</b>
              </label>
              <br />
              <Form.Control type='url' />
            </Form.Group>
            <br />
            <Form.Group>
              <label>
                <b>프로젝트 설명</b>
              </label>
              <br />
              <Form.Control type='textarea' />
            </Form.Group>
          </div>
          <>
            <ToastEditor />
          </>
          <Button variant='primary' type='submit'>
            등록하기
          </Button>
        </Form>
      </div>
    </>
  );
}
