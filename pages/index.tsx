import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card";
import { Button, Nav } from "react-bootstrap";
import { CardDto } from "../dto";
import { useEffect, useState } from "react";
import { client } from "../function/request";

export default function Home() {
  const [card, setCard] = useState<CardDto[]>([]);
  const [likeCard, setLikeCard] = useState<CardDto[]>([]);

  useEffect(() => {
    const getLikeCard = async () => {
      const response = await client.get("/?page=0&sort=likes,DESC");
      const data: CardDto[] = response.data;
      console.log("likecard", data);
      setLikeCard(data);
    };

    getLikeCard();
  }, []);

  useEffect(() => {
    const getCard = async () => {
      const response = await client.get("/?page=0&sort=date,DESC");
      const data: CardDto[] = response.data;
      console.log("card", data);
      setCard(data);
    };

    getCard();
  }, []);

  if (card.length < 1 || likeCard.length < 1) {
    return <div>Loading...</div>;
  }

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
          <div>
            <h2>
              <b>최근 업로드 된 프로젝트</b>
              <Button
                style={{ float: "right", marginLeft: "20px;" }}
                href='/search'
              >
                더보기
              </Button>
            </h2>
            <hr />

            <div className={styles.container}>
              <Card data={card[0]} />
              <Card data={card[1]} />
              <Card data={card[2]} />
              <Card data={card[3]} />
              <Card data={card[4]} />
            </div>
          </div>
          <div>
            <h2>
              <br />
              <b>가장 인기있는 프로젝트</b>
              <Button
                style={{ float: "right", marginLeft: "20px;" }}
                href='/search'
              >
                더보기
              </Button>
            </h2>

            <hr />
            <div className={styles.container}>
              <Card data={likeCard[0]} />
              <Card data={likeCard[1]} />
              <Card data={likeCard[2]} />
              <Card data={likeCard[3]} />
              <Card data={likeCard[4]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
