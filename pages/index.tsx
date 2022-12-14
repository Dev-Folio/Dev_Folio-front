import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
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
        <div>
          <div className='searchArea'>
            <input type='text' />
          </div>
          <br />
          <div className='poupularProject'>
            <h2>
              <b>최근 업로드 된 프로젝트</b>
            </h2>
            <hr />
            {/* 카드 캐러셀은 컴포넌트 만들면 추가 예정 */}
          </div>
          <div className='recentProject'>
            <h2>
              <b>최근 업로드 된 프로젝트</b>
            </h2>
            <hr />
            {/* 카드 캐러셀은 컴포넌트 만들면 추가 예정 */}
          </div>
        </div>
      </div>
    </div>
  );
}
