import { TagDto } from '../dto';
import styles from '../styles/Tag.module.scss';

interface TagProps {
  data: TagDto;
}

export default function Tag({ data }: TagProps) {
  return <div className={styles.container}>{data.name}</div>;
}
