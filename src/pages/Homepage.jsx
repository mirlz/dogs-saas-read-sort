import { useState } from 'react';
import { Layout, Form, Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;

import DoggoSearch from '../components/DoggoSearch';
import Loading from '../components/Loading';
import Error from '../components/Error';
import DoggoSearchResults from '../components/DoggoSearchResults';
import SortInput from '../components/SortInput';

const Homepage = (() => {
    const [dogs, setDogs] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();

    const onSearch = (searchVal) => {
        setDogs(searchVal);
    }

    const reverseDogs = () => {
        const reverseDogs = [...dogs].reverse();
        setDogs(reverseDogs);
    }

    return (
        <Layout className="layout">
            <Header className="header">
                <h2>{`Doggo Search`}</h2>
            </Header>
            <Content className="content">
                <div className="site-layout-content">
                    <Form
                        form={form}
                        name="doggo-breed-search"
                    >
                        <Row gutter={16}>
                            <Col xs={12} lg={8} xxl={5}>
                                <DoggoSearch form={form} setDogs={onSearch} setLoading={setLoading} setError={setError} />
                            </Col>
                            <Col xs={0} lg={8} xxl={14}></Col>
                            <Col xs={12} lg={8} xxl={5} className="sortWrapper">
                                <SortInput setDogs={setDogs} dogs={dogs} reverseDogs={reverseDogs} />
                            </Col>
                        </Row>
                    </Form>
                    <Row gutter={[16, 16]}>
                        {
                            (loading) ? <Loading /> :
                                (error) ? <Error /> :
                                    <DoggoSearchResults dogs={dogs} />
                        }
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>MirlZ ©2023 Created by Ant UED</Footer>
        </Layout >
    )
});

export default Homepage
