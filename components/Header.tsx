import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { IoAddCircleOutline, IoPersonCircle } from 'react-icons/io5';
import MemberContext from '../context/MemberProvider';
import styles from '../styles/Header.module.scss';

export default function Header() {
  const router = useRouter();
  const { member, setMember } = useContext(MemberContext);

  const handleLogoutClick = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      setMember(null);
      router.replace('/');
    }
  };

  const handleProfileClick = () => {
    router.push(`/profile/${member?.memberId}`);
  };

  return (
    <Navbar bg="light" className={styles.navbar}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={160}
              height={40}
              priority
            />
          </Link>
        </Navbar.Brand>

        {member?.isLogined ? (
          <Nav className={styles.nav}>
            <Link href="/project/new">
              <IoAddCircleOutline size={45} color="gray" />
            </Link>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary"
                className={styles.profile_wrapper}
                id="dropdown-button"
              >
                {member.image ? (
                  <Image
                    src={process.env.NEXT_PUBLIC_S3_URL + member.image}
                    alt="profile_image"
                    width={40}
                    height={40}
                    className={styles.profile_image}
                  />
                ) : (
                  <IoPersonCircle className={styles.no_profile_image} />
                )}
                {member.name}
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item onClick={handleProfileClick}>
                  내 프로필
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogoutClick}>
                  로그아웃
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        ) : (
          <Nav className={styles.nav}>
            <Link href="/login">
              <Button
                variant="outline-secondary"
                className={styles.login_button}
              >
                로그인 / 회원가입
              </Button>
            </Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
