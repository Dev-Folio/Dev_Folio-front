import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { IoSearchOutline } from 'react-icons/io5';
import Card from '../components/Card';
import Header from '../components/Header';
import { CardTag, MemberTag, SearchTag } from '../components/Tag';
import { CardDto, CategoryDto, TagData, TagDto, MemberViewDto } from '../dto';
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
  const [query, setQuery] = useState('');
  const [members, setMembers] = useState<MemberViewDto[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<MemberViewDto[]>([]);
  const [cards, setCards] = useState<CardDto[]>([]);

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

  const handleSearch = async () => {
    const data = {
      tags: selectedTag,
      keyword: query,
      members: [],
    };
    const response = await client.post('/search', data);
    console.log('search', response.data);
    const content = response.data.content;
    setCards(content);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.includes('@') && value[value.indexOf('@') + 1]) {
      const name = value.substring(value.indexOf('@') + 1);
      console.log('name', name);
      getMembers(name);
    } else {
      setMembers([]);
    }

    setQuery(e.target.value);
  };

  const getMembers = async (name: string) => {
    const response = await client.get('/search/member', {
      params: { query: name },
    });
    const data: MemberViewDto[] = response.data;
    setMembers(data);
  };

  const handleMemberClick = (member: MemberViewDto) => {
    const newSelectedMembers = [...selectedMembers];
    newSelectedMembers.push(member);
    setSelectedMembers(newSelectedMembers);
  };

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
            {selectedMembers.map((member) => (
              <MemberTag data={member} />
            ))}
            <input
              className={styles.input}
              // placeholder="@로 시작하여 유저를 검색할 수 있습니다"
              value={query}
              onChange={handleChange}
            />
            <Button
              variant="outline-secondary"
              className={styles.search_button}
              onClick={handleSearch}
            >
              검색
            </Button>
          </div>

          {members.length > 0 ? (
            <div className={styles.dropdown}>
              {members.map((member) => (
                <button
                  className={styles.member}
                  onClick={() => {
                    handleMemberClick(member);
                  }}
                >{`${member.name} (${member.number})`}</button>
              ))}
            </div>
          ) : null}

          {/* 태그 */}
          <div className={styles.tag_container}>
            {tags?.map((tag) => (
              <SearchTag data={tag} tagClick={tagClick} key={tag.tagId} />
            ))}
          </div>

          {/* 카드들 */}
          <div className={styles.card_container}>
            {cards.map((card) => (
              <Card data={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
