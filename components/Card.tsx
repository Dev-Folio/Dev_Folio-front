import Image from 'next/image';
import { IoChatbubbleEllipsesOutline, IoHeartOutline } from 'react-icons/io5';
import { CardDto } from '../dto';
import styles from '../styles/Card.module.scss';
import { CardTag } from './Tag';

interface CardProps {
  data: CardDto;
}

export default function Card({ data }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail_wrapper}>
        <Image
          className={styles.thumbnail}
          src={data.thumbnail}
          alt={data.project_name}
          fill
        />
      </div>
      <hr className={styles.seperator} />
      <div className={styles.content}>
        <div className={styles.info1}>
          <div className={styles.project_name}>{data.project_name}</div>
          <div className={styles.tags}>
            {data.tags.map((tag) => (
              <CardTag data={tag} key={tag.tag_id} />
            ))}
          </div>
        </div>
        <div className={styles.info2}>
          <div className={styles.profile}>
            <Image
              className={styles.profile_image}
              src={data.wrote_member.image}
              alt=""
              width={30}
              height={30}
            />
            <div className={styles.wrote_member}>{data.wrote_member.name}</div>
          </div>
          <div className={styles.likes_comments}>
            <div className={styles.likes}>
              <IoHeartOutline />
              {data.likes}
            </div>
            <div className={styles.comment}>
              <IoChatbubbleEllipsesOutline />
              {data.comments}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
