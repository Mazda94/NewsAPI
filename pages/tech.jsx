import { client, query } from '../helper'
import Layout from '../comps/layout'
import {
    Row,
    Col,
    Nav,
    Tab
} from 'react-bootstrap'
import NewsCard from '../comps/newsCard'

const Page = ({ data, error }) => {
    if (error) {
        return (
            <Layout>
                <p>Error while load data</p>
            </Layout>
        )
    }

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
                                    news={data[0].idnTech}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="sg">
                                <NewsCard
                                    title="Singapore Tech"
                                    news={data[1].sgTech}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="us">
                                <NewsCard
                                    news={data[2].usTech}
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

Page.getInitialProps = async ({ store }) => {
    // const { technologies } = store.getState();
    // if (technologies.length) {
    //     return { data: technologies }
    // } else {
    try {
        const promises = {
            idnTech: await client.get(query('id', 'technology')),
            sgTech: await client.get(query('sg', 'technology')),
            usTech: await client.get(query('us', 'technology')),
        }
        const { idnTech, sgTech, usTech } = promises
        const payload = [
            { idnTech: idnTech.data.articles.slice(0, 8) },
            { sgTech: sgTech.data.articles.slice(0, 8) },
            { usTech: usTech.data.articles.slice(0, 8) },
        ]
        store.dispatch({ type: 'SET_TECHNOLOGIES', payload })
        return {
            data: payload
        }
    } catch (error) {
        return {
            error: error.message
        }
        // }
    }

}

export default Page