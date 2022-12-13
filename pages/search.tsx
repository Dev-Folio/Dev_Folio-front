import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { IoSearchOutline } from 'react-icons/io5';
import Header from '../components/Header';
import Tag from '../components/Tag';
import { CategoryDto, TagDto } from '../dto';
import { client } from '../function/request';
import styles from '../styles/Search.module.scss';

export default function Search() {
  const [categories, setCategories] = useState<CategoryDto[]>();
  const [tags, setTags] = useState<TagDto[]>();
  const [selectedTag, setSelectedTag] = useState<number[]>();

  useEffect(() => {
    const getCategories = async () => {
      const response = await client.get('/category');
      const data: CategoryDto[] = response.data;
      console.log(data);
      setCategories(data);
    };

    const getTags = async () => {
      const response = await client.get('/tag');
      const data: TagDto[] = response.data;
      console.log(data);
      setTags(data);
    };

    getCategories();
    getTags();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <aside className={styles.category}>
          <div>전체보기</div>
          {categories?.map((category) => (
            <div>{category.name}</div>
          ))}
        </aside>
        <div className={styles.search_area}>
          {/* 검색창 */}
          <div className={styles.search}>
            <IoSearchOutline size={25} />
            <input
              className={styles.input}
              placeholder="@로 시작하여 유저를 검색할 수 있습니다"
            ></input>
            <Button
              variant="outline-secondary"
              className={styles.search_button}
            >
              검색
            </Button>
          </div>

          <div className={styles.tag_container}>
            {/* 태그 */}
            {tags?.map((tag) => (
              <Tag data={tag} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
