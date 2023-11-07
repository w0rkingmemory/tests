// Interference Test. (60 images)
import type { FC } from 'react';

import * as hooks from './hooks';

import * as Ant from 'antd';
import * as Icons from '@ant-design/icons';
import Preview from './steps/preview';
import Start from './steps/start';
import Attempt from './steps/attempt';
import Result from './steps/result';


const Test1Run: FC = () => {
    // Preload
    const isLoad = hooks.useImagePreload();
    const result = hooks.useResult();
    const stepItems = hooks.useStepItems(result.picked);
    // const state = hooks.useTestState();
    // const items = hooks.useStartItems(state.picked, state.error);
  

    if (!isLoad) return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 40
            }}
        >
            <Ant.Typography.Text>
                <Icons.LoadingOutlined
                    style={{
                        fontSize: 40
                    }}
                />
            </Ant.Typography.Text>
        </div>
    );

    return (
        <div>
            <Attempt
                open={result.openAttempt}
                onOk={() => result.onNextAttempt()}
            />
            {result.status === 'init' && <Preview onStart={result.onStart} />}
            {/* {state.step === 'error' && <Error onRestart={() => state.onRestart()} />} */}
            {result.status === 'complete' && (
                <Result
                    data={result.result}
                    // right={0}//state.picked.length}
                    // error={0}
                    // time={0}
                    // onRestart={() => {}}
                />
            )}
            {result.status === 'start' && (
                <Start
                    open={result.status === 'start'}
                    onClose={result.onClose}
                    items={stepItems}
                    onPick={result.onPick}
                />
            )}
        </div>
    );
};

export default Test1Run;