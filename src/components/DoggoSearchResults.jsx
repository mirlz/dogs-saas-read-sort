import { Col, Card, Image, Spin } from 'antd';

const DoggoSearchResults = ((props) => {
    const { dogs } = props;

    return (
        (dogs.length > 0) ?
            dogs.map(dog => {
                const {
                    height: { metric },
                    image: { url },
                    id,
                    name,
                    life_span } = dog
                return (
                    <Col sm={12} md={8} xxl={6} key={id}>
                        <Card title={name} bordered={false} className="dogCard">
                            <Image
                                src={url}
                                placeholder={
                                    <Spin size="large" />
                                }
                            />
                            <div className="height">Height: {metric}</div>
                            <div className="lifeSpan">Life Span: {life_span}</div>
                        </Card>
                    </Col>
                )
            }) : ''
    )
});

export default DoggoSearchResults;