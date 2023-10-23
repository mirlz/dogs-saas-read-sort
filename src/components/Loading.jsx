import { Spin, Card } from 'antd';

const Loading = (() => {
    return (
        <Card className="spaceAlignContainer">
            <Spin size="large" />
        </Card>
    )
});

export default Loading;