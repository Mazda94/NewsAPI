import Header from './header'
import { Container } from 'react-bootstrap'

const layoutStyle = {
  margin: 0,
  fontFamily: 'Inria Sans'
}

const Layout = props => {
  return (
    <div
      style={layoutStyle}>
      <Header />
      <Container
        className="my-4">
        {props.children}
      </Container>
    </div>
  )
}

export default Layout