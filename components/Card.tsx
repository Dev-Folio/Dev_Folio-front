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
    <div>
      <Image src={data.thumbnail} alt="프로젝트 이미지" />
      <div className={styles.content}>
        <div className={styles.project_name}>{data.project_name}</div>
        <div className={styles.tags}>
          {data.tags.map((tag) => (
            <CardTag data={tag} />
          ))}
        </div>
        <div className={styles.info}>
          <div className={styles.profile}>
            <Image
              className={styles.image}
              src={data.wrote_member.image}
              alt="프로필 이미지"
            />
            <div className={styles.wrote_member}>{data.wrote_member.name}</div>
          </div>
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
  );
}
