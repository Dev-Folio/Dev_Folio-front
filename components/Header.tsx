import Image from 'next/image';
import Link from 'next/link';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={160} height={40} />
          </Link>
        </Navbar.Brand>
        <div className={styles.profile_wrapper}>
          <Image src="/logo.png" alt="profile_image" width={20} height={20} />
          <NavDropdown title="이정윤" align="end">
            <NavDropdown.Item>마이페이지</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>로그인</NavDropdown.Item>
            <NavDropdown.Item>로그아웃</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
}


