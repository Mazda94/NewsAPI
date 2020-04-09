import { client, query } from '../helper'
import Layout from '../comps/layout'
import {
    Row,
    Col,
    Nav,
    Tab
} from 'react-bootstrap'
import NewsCard from '../comps/newsCard'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Page = ({ data, error }) => {
    const { business } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if (business.length === 0) {
            dispatch({ type: 'SET_BUSINESS', payload: data.business })
            dispatch({ type: 'SET_TECHNOLOGIES', payload: data.tech })
        }
    }, [])

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
                                    id={'idnBusiness'}
                                    title="Indonesia Business"
                                    news={business.length > 0 ? business[0].idnBusiness : data.business[0].idnBusiness}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="sg">
                                <NewsCard
                                    title="Singapore Business"
                                    news={business.length > 0 ? business[1].sgBusiness : data.business[1].sgBusiness}
                                    id={'sgBusiness'}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="us">
                                <NewsCard
                                    id={'usBusiness'}
                                    news={business.length > 0 ? business[2].usBusiness : data.business[2].usBusiness}
                                    title="United States Business"
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
    const { business } = store.getState()
    if (business.length > 0) return {}

    try {
        const promises = {
            idnBusiness: await client.get(query('id', 'business')),
            sgBusiness: await client.get(query('sg', 'business')),
            usBusiness: await client.get(query('us', 'business')),
            idnTech: await client.get(query('id', 'technology')),
            sgTech: await client.get(query('sg', 'technology')),
            usTech: await client.get(query('us', 'technology')),
        }
        const {
            idnBusiness,
            sgBusiness,
            usBusiness,
            idnTech,
            sgTech,
            usTech
        } = promises
        const business = [
            { idnBusiness: idnBusiness.data.articles.slice(0, 8) },
            { sgBusiness: sgBusiness.data.articles.slice(0, 8) },
            { usBusiness: usBusiness.data.articles.slice(0, 8) },
        ]

        const tech = [
            { idnTech: idnTech.data.articles.slice(0, 8) },
            { sgTech: sgTech.data.articles.slice(0, 8) },
            { usTech: usTech.data.articles.slice(0, 8) },
        ]
        return {
            data: {
                business,
                tech
            }
        }
    } catch (error) {
        return {
            error: error.message
        }
    }
}

export default Page