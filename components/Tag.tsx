import classNames from 'classnames';
import { TagData, TagDto } from '../dto';
import styles from '../styles/Tag.module.scss';

interface SearchTagProps {
  data: TagData;
}

export function SearchTag({ data }: SearchTagProps) {
  return (
    <button
      className={classNames(
        styles.container,
        data.selected ? styles.selected : styles.unselected
      )}
    >
      {data.name}
    </button>
  );
}

interface CardTagProps {
  data: TagDto;
}

export function CardTag({ data }: CardTagProps) {
  return <div className={styles.container}>{data.name}</div>;
}
