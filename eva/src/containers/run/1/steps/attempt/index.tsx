import type { FC } from 'react';

import * as Ant from 'antd';


const Attempt: FC<{ open: boolean; onOk: () => void}> = (props) => {
    return (
        <Ant.Modal
            // title="Неправильный выбор"
            open={props.open}
            okText="Следующая попытка"
            closable={false}
            onCancel={() => {}}
            footer={null}
            width={400}
            centered
        >
            <Ant.Result
                status="warning"
                title="Неправильный выбор"
            />
            <Ant.Button
                type="primary"
                onClick={props.onOk}
                style={{
                    width: '100%'
                }}
            >
                Следующая попытка
            </Ant.Button>
        </Ant.Modal>
    )
};

export default Attempt;
