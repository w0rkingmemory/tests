import type { FC } from 'react';

import * as utils from '@root/utils/app';
import * as react from 'react';

import * as Ant from 'antd';


const ih = 640;
const iw = 960;


const TestStart: FC<{ items: number[]; onPick: (item: number) => void; open: boolean; onClose: () => void; }> = (props) => {
    // const { token } = Ant.theme.useToken();
    const backgrounUrl = utils.appLink(`/interference/back.jpg`);
    const [height, setHeight] = react.useState<number>(0);
    const [width, setWidth] = react.useState<number>(0);
    const [itemHeight, setItemHeight] = react.useState<number>(0);
    const [itemWidth, setItemWidth] = react.useState<number>(0);

    const resize = () => {
        const h = 0.9 * window.innerHeight;
        const w = 0.9 * window.innerWidth;

       
        const w1 = w;
        const h1 = ih * w / iw;

        if (h1 <= h) {
            setWidth(w1);
            setHeight(h1);
            setItemHeight(0.2 * h1);
            setItemWidth( w1 / 6);
        } else {
            const h2 = h1 * (h / h1);
            const w2 = w1 * (h / h1);
            setWidth(w2);
            setHeight(h2);
            setItemHeight(0.2 * h2);
            setItemWidth( w2 / 6);
        }
       
    };

    react.useEffect(() => {
        resize();
    });


    react.useEffect(() => {
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    });



    return (
        <Ant.Modal
            open={props.open}
            onCancel={props.onClose}
            closable={false}
            footer={null}
            centered
            width={width}
            styles={{
                body: {
                    // padding: 40,
                    height: height
                },
                content: {
                    padding: 0,
                    backgroundImage: `url("${backgrounUrl}")`,
                    // backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%, 100%'
                }
            }}
        >
            <Ant.Row style={{ height: '100%' }}>
                {props.items.map((item, index) => {
                    if (item < 0) 
                        return (
                            <Ant.Col 
                                key={`item.${index}`}
                                span={4} 
                                style={{ height: itemHeight }}
                            />
                        );
                    
                    return (
                        <Ant.Col 
                            key={`item.${index}`}
                            span={4} 
                            style={{ 
                                height: itemHeight,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <div
                                style={{
                                    cursor: 'pointer'
                                }}
                                onClick={() => {
                                    props.onPick(item)
                                }}
                            >
                                <img 
                                    src={utils.appLink(`/interference/${item}.bmp`)}
                                    height={(itemHeight > itemWidth ? itemWidth : itemHeight) - 20}
                                    // width="100%"
                                />
                            </div>
                        </Ant.Col>
                    )
                })}
            </Ant.Row>
        </Ant.Modal>
    );
};

export default TestStart;
