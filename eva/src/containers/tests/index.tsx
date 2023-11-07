import type { FC } from 'react';
import type { RootState } from '@root/utils/store';

import * as Ant from 'antd';
import * as Router from 'react-router-dom';
import * as Redux from 'react-redux';


const Tests: FC = () => {
    const { token } = Ant.theme.useToken();
    const store = Redux.useSelector((state: RootState) => state.tests);
    const navigate = Router.useNavigate();

    if (store.tests.length == 0) return <Ant.Empty />;

    return (
        <Ant.Row gutter={[24, 24]}>
            {store.tests.map((item) => (
                <Ant.Col span={24} key={`test.${item.id}`}>
                    <Ant.Card
                        hoverable
                        onDoubleClick={() => {
                            navigate(`${item.id}`);
                        }}
                        cover={(
                            <img 
                                src={item.icon || ''}
                                height={150}
                                width={150}
                                style={{
                                    padding: token.paddingLG
                                }}
                            />
                        )}
                    >
                        <Ant.Card.Meta 
                            title={item.title}
                            description={(
                                <Ant.Typography.Text
                                    style={{
                                        whiteSpace: 'pre-line'
                                    }}
                                    type="secondary"
                                >
                                    {item.description}
                                </Ant.Typography.Text>
                            )}
                        />
                        <Ant.Button
                            size="middle"
                            type="primary"
                            onClick={() => {
                                navigate(`${item.id}`);
                            }}
                            style={{
                                width: '100%',
                                marginTop: token.marginMD
                            }}
                        >
                            Пройти тест
                        </Ant.Button>
                    </Ant.Card>
                </Ant.Col>
            ))}
        </Ant.Row>
    );
};

export default Tests;
