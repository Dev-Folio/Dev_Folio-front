import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { IoSearchOutline } from 'react-icons/io5';
import Card from '../components/Card';
import Header from '../components/Header';
import { SearchTag } from '../components/Tag';
import { CardDto, CategoryDto, TagData, TagDto } from '../dto';
import { client } from '../function/request';
import styles from '../styles/Search.module.scss';

const mockCardData: CardDto = {
  project_id: 0,
  thumbnail: '/sample_image.png',
  project_name: 'Dev-Folio',
  tags: [
    {
      tag_id: 1,
      name: 'JavaScript',
      color: '#ffffff',
      categories: [],
    },
  ],
  wrote_member: {
    member_id: 1,
    name: '이정윤',
    image: '/sample_profile_image2.jpeg',
    number: '201845092',
  },
  likes: 0,
  comments: 0,
};

export default function Search() {
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [tags, setTags] = useState<TagData[]>([]);
  const [selectedTag, setSelectedTag] = useState<number[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await client.get('/category');
      const data: CategoryDto[] = response.data;
      console.log('category', data);
      setCategories(data);
    };

    const getTags = async () => {
      const response = await client.get('/tag');
      const data: TagDto[] = response.data;
      console.log('tag', data);

      const tags: TagData[] = [];
      data.map((tagDto) => {
        tags.push({
          tagId: tagDto.tag_id,
          name: tagDto.name,
          color: tagDto.color,
          selected: false,
        });
      });
      setTags(tags);
    };

    getCategories();
    getTags();
  }, []);

  const tagClick = (tagId: number) => {
    const newSelectedTag = [...selectedTag];
    if (newSelectedTag.includes(tagId)) {
      // tagId가 있으면 배열에서 삭제
      setSelectedTag(newSelectedTag.filter((element) => element !== tagId));
    } else {
      // 없으면 추가
      newSelectedTag.push(tagId);
      setSelectedTag(newSelectedTag);
    }
  };

  useEffect(() => {
    console.log('selectedTag', selectedTag);

    const newTags = [...tags];

    // 모든 selected false로 초기화
    newTags.map((tags) => (tags.selected = false));

    // selectedTag에 있는 tagId 찾아서 true로 바꿈
    selectedTag.forEach((selectedTagId) => {
      const foundIndex = newTags.findIndex(
        (element) => element.tagId === selectedTagId
      );
      newTags[foundIndex].selected = true;
    });
    setTags(newTags);
  }, [selectedTag]);

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
              <SearchTag data={tag} tagClick={tagClick} key={tag.tagId} />
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            <Card data={mockCardData} />
          </div>
        </div>
      </div>
    </>
  );
}
