// Interference Test. (60 images)
import type { FC } from 'react';
import type { RootState } from '@root/utils/store';

// import * as utils from '@root/utils/app';
import * as redux from 'react-redux';

import * as Ant from 'antd';


const Test1Preview: FC<{ onStart: () => void }> = (props) => {
    const { token } = Ant.theme.useToken();
    const store = redux.useSelector((state: RootState) => state.tests.tests[0]);

    return (
        <Ant.Row
            gutter={[24, 24]}
        >
            <Ant.Col span={12}>
                <Ant.Card
                    style={{
                        height: '100%'
                    }}
                    bodyStyle={{
                        height: '100%'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <img 
                            src={store?.icon || ''}
                            height={150}
                            width={150}
                            style={{
                                padding: token.paddingLG
                            }}
                        />
                    </div>
                </Ant.Card>
            </Ant.Col>
            <Ant.Col span={12}>
                <div>
                    <Ant.Descriptions
                        title={store?.title}
                        layout="vertical"
                        column={1}
                    >
                        <Ant.Descriptions.Item label="Описание">
                            {store?.description}
                        </Ant.Descriptions.Item>
                        <Ant.Descriptions.Item label="Время на выполнение">
                            {store?.rules?.maxTime ? `${store?.rules?.maxTime} секунд`  : 'Не ограничено'}
                        </Ant.Descriptions.Item>
                        <Ant.Descriptions.Item label="Количество попыток">
                            {store?.rules?.maxAttempt || '0'}
                        </Ant.Descriptions.Item>
                    </Ant.Descriptions>
                    <Ant.Button
                        size="middle"
                        type="primary"
                        onClick={props.onStart}
                        style={{
                            width: '100%'
                        }}
                    >
                        Начать тест
                    </Ant.Button>
                </div>
            </Ant.Col>
        </Ant.Row>
    );
};

export default Test1Preview;