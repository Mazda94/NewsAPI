import { Container, Col, Row, Button } from "react-bootstrap"
import moment from 'moment'

moment.locale('id')

const NewsCard = ({ title, news, id }) => {
  return (
    <>
      <h3 className="font-weight-bold">{title}</h3>
      <hr />
      {
        news.map((item, index) => {
          const content = item.content?.split('[')[0]
          return (
            <Container
              fluid
              className="mt-4"
              key={index}>
              <Row>
                <Col xs={12} md={4} xl={4}>
                  <img
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = "https://www.kapilerindonesia.com/asset/image/panti/no_image.jpg"
                    }}
                    alt="No Image"
                    height="auto"
                    width="100%"
                    src={item.urlToImage || 'https://www.kapilerindonesia.com/asset/image/panti/no_image.jpg'} />
                </Col>
                <Col xs={12} md={8} xl={8}>
                  <h4>{item.title}</h4>
                  <div
                    style={{
                      marginBottom: 12,
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                    <span style={{ fontWeight: 'lighter' }}>Author : {item.author || "Unknown"}</span>
                    <span style={{ fontWeight: 'lighter' }}>{moment(item.publishedAt).format('dddd, DD MMMM YYYY')}</span>
                  </div>
                  <p>{content}</p>
                  <div
                    style={{
                      display: 'flex',
                      marginTop: 24,
                      justifyContent: 'flex-end'
                    }}>
                    <Button href={item.url} variant="primary">Read More</Button>
                  </div>
                </Col>
              </Row>
              <hr />
            </Container>
          )
        })
      }
    </>
  )
}

export default NewsCard