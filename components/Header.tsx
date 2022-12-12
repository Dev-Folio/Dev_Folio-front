import Image from 'next/image';
import Link from 'next/link';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { IoAddCircleOutline } from 'react-icons/io5';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <Navbar bg="light" className={styles.navbar}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={160} height={40} />
          </Link>
        </Navbar.Brand>

        <Nav className={styles.nav}>
          <Link href="/project/new">
            <IoAddCircleOutline size={45} color="gray" />
          </Link>
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-secondary"
              className={styles.profile_wrapper}
            >
              <Image
                src="/test_profile_image.jpg"
                alt="profile_image"
                width={40}
                height={40}
                className={styles.profile_image}
              />
              이정윤
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item>마이페이지</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>로그인</Dropdown.Item>
              <Dropdown.Item>로그아웃</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
