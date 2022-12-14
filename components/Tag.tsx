import classNames from 'classnames';
import { TagData, TagDto } from '../dto';
import styles from '../styles/Tag.module.scss';

interface SearchTagProps {
  data: TagData;
  tagClick: Function;
}

export function SearchTag({ data, tagClick }: SearchTagProps) {
  return (
    <button
      className={classNames(
        styles.container,
        styles.search,
        data.selected ? styles.selected : styles.unselected
      )}
      onClick={() => {
        tagClick(data.tagId);
      }}
    >
      {data.name}
    </button>
  );
}

interface CardTagProps {
  data: TagDto;
}

export function CardTag({ data }: CardTagProps) {
  return (
    <div className={classNames(styles.container, styles.card)}>{data.name}</div>
  );
}
