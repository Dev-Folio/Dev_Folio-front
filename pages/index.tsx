import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card";
import { Button, Nav } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.container}>
        <div>
          <div className='searchArea'>
            {/* 여기에 넣어주세요 그 뭐냐 그 뭔지 알지 */}
          </div>
          <br />
          <div className='poupularProject'>
            <h2>
              <b>가장 인기있는 프로젝트</b>
              <Button style={{ float: "right", marginLeft: "20px;" }}>
                더보기
              </Button>
            </h2>
            <hr />
            <>
              <Card data={mockCardData} />
              <Card data={mockCardData} />
              <Card data={mockCardData} />
              <Card data={mockCardData} />
              <Card data={mockCardData} />
            </>
          </div>
          <div className='recentProject'>
            <h2>
              <b>최근 업로드 된 프로젝트</b>
              <Button style={{ float: "right", marginLeft: "20px;" }}>
                더보기
              </Button>
            </h2>

            <hr />
            <Card data={mockCardData} />
            <Card data={mockCardData} />
            <Card data={mockCardData} />
            <Card data={mockCardData} />
            <Card data={mockCardData} />
          </div>
        </div>
      </div>
    </div>
  );
}
