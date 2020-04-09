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
    const { technologies } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if (technologies.length === 0) {
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
                                    id={'idnTech'}
                                    title="Indonesia Tech"
                                    news={technologies.length > 0 ? technologies[0].idnTech : data.tech[0].idnTech}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="sg">
                                <NewsCard
                                    title="Singapore Tech"
                                    news={technologies.length > 0 ? technologies[1].sgTech : data.tech[1].sgTech}
                                    id={'sgTech'}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="us">
                                <NewsCard
                                    id={'usTech'}
                                    news={technologies.length > 0 ? technologies[2].usTech : data.tech[2].usTech}
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
    const { technologies } = store.getState()
    if (technologies.length > 0) return {}

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