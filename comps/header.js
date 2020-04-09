import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'
const Header = () => {
  const { pathname } = useRouter()
  return (
    <Navbar
      bg="light"
      variant="light"
    >
      <Navbar.Brand>
        <img
          alt="logo"
          src="/logo.png"
          width="56"
          height="30"
          className="d-inline-block align-center" />
        <span
          style={{
            fontSize: 20,
            marginLeft: 12,
            fontWeight: 'bolder'
          }}>
          News
        </span>
      </Navbar.Brand>
      <Nav
        className="mr-auto">
        <Link href="/" passHref>
          <Nav.Link
            className={pathname === '/' ? 'active font-weight-bold text-primary' : 'font-weight-lighter'}
          >Business</Nav.Link>
        </Link>
        <Link href="/tech" passHref>
          <Nav.Link
            className={pathname === '/tech' ? 'active font-weight-bold text-primary' : 'font-weight-lighter'}
          >Technology</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Header