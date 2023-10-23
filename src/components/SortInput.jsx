import { useState } from 'react';
import { Form, Select, Button } from 'antd';
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';

const SortInput = ((props) => {
    const [asc, setAsc] = useState(true);

    const getSortIcon = () => {
        if (asc) {
            return <SortAscendingOutlined />
        }
        return <SortDescendingOutlined />
    }

    const onSort = (sortOpt) => {
        switch (sortOpt) {
            case 'name': {
                const sorted = [...props.dogs].sort((a, b) => (a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
                props.setDogs(sorted);
            }
                break;
            case 'height': {
                const sorted = [...props.dogs].sort((a, b) => {
                    const { height: { metric: aMetric } } = a;
                    const { height: { metric: bMetric } } = b;

                    const aArr = aMetric.split(' ');
                    const bArr = bMetric.split(' ');

                    return aArr[0] - bArr[0];
                });

                props.setDogs(sorted);
            }
                break;
            case 'lifespan': {
                const sorted = [...props.dogs].sort((a, b) => {
                    const { life_span: aLife } = a;
                    const { life_span: bLife } = b;

                    const aArr = aLife.split(' ');
                    const bArr = bLife.split(' ');

                    return aArr[0] - bArr[0];
                });

                props.setDogs(sorted);
            }
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Form.Item
                name="sort"
                label="Sort By"
                field="sort"
                initialValue="name"
                style={{ flexGrow: 1 }}
            >
                <Select
                    onSelect={onSort}
                    disabled={!props.dogs.length}
                    options={[
                        { value: 'name', label: 'Name' },
                        { value: 'height', label: 'Height' },
                        { value: 'lifespan', label: 'LIfe Span' }
                    ]}
                />
            </Form.Item>
            <Form.Item
                colon={false}
                label=" "
            >
                <Button
                    className="sortIcon"
                    disabled={!props.dogs.length}
                    onClick={() => {
                        setAsc(!asc);
                        props.reverseDogs();
                    }}
                    icon={getSortIcon()} />
            </Form.Item>
        </>
    )
});

export default SortInput; 