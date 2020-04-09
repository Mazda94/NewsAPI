import Layout from '../comps/layout'
import {
    Row,
    Col,
    Nav,
    Tab
} from 'react-bootstrap'
import NewsCard from '../comps/newsCard'
import { useSelector } from 'react-redux'

const Page = () => {
    const { technologies } = useSelector(state => state)

    return (
        <Layout>
            <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="idn">
                <Row>
                    <Col
                        xs={12} md={4} xl={3}>
                        <h3>Country</h3>
                        <Nav
                            variant="pills"
                            className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="idn">Indonesia</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sg">Singapore</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="us">United States</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={12} md={8} xl={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="idn">
                                <NewsCard
                                    title="Indonesia Tech"
                                    news={technologies[0].idnTech}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="sg">
                                <NewsCard
                                    title="Singapore Tech"
                                    news={technologies[1].sgTech}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="us">
                                <NewsCard
                                    news={technologies[2].usTech}
                                    title="United States Tech"
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Layout>
    )
}

export default Page