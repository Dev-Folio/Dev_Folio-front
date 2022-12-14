import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Search from "../components/Search";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import { Button, Nav } from "react-bootstrap";

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
            <Search />
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
          </div>
          <div className='recentProject'>
            <h2>
              <b>최근 업로드 된 프로젝트</b>
              <Button style={{ float: "right", marginLeft: "20px;" }}>
                더보기
              </Button>
            </h2>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
