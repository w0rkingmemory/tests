import type { FC } from 'react';
import type { Result } from '../../hooks/useResult';

import * as utils from '@root/utils/app';

import * as Ant from 'antd';
import * as React from 'react';
import * as Router from 'react-router-dom';


const ShareForm: FC<{ onCancel: () => void; data: Result[] }> = (props) => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    // const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setSuccess(false)
    }, []);


    if (success) return (
        <Ant.Result 
            status="success"
            title="Результаты были отправлены!"
        />
    );

    return (
        <Ant.Form
            layout="vertical"
            onFinish={(values) => {
                setLoading(true);
                fetch("https://formsubmit.co/ajax/99f1d048efe8d404ed9bd875c82ec87b", {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: "FormSubmit",
                        message: JSON.stringify({
                            ...values,
                            data: props.data.map((item) => ({
                                ...item,
                                time: item.end.diff(item.start, 'seconds')
                            }))
                        }, null, 2)
                    })
                })
                .then(() => {
                    setSuccess(true);
                    setLoading(false);
                    // setError(false);
                })
                .catch(() => {
                    setSuccess(false);
                    setLoading(false);
                    // setError(true);
                })
            }}
            style={{
                marginTop: 24
            }}
        >
            <Ant.Form.Item label="ФИО" name="user" rules={[{ required: true }]}>
                <Ant.Input />
            </Ant.Form.Item>
            <Ant.Form.Item label="Пол" name="male" rules={[{ required: true }]}>
                <Ant.Select 
                    options={[
                        { value: 'ж', label: 'Женский' },
                        { value: 'м', label: 'Мужской' }
                    ]}
                />
            </Ant.Form.Item>
            <Ant.Form.Item 
                label="Дата рождения"
                name="date"
                rules={[{ required: true }]}
            >
                <Ant.Input 
                    placeholder="Формат даты: DD.MM.YYYY"
                />
            </Ant.Form.Item>
            {/* {error && ()} */}
            <Ant.Form.Item
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <Ant.Space>
                    <Ant.Button
                        // loading={loading}
                        disabled={loading}
                        onClick={() => props.onCancel()}
                    >
                        Отмена
                    </Ant.Button>
                    <Ant.Button 
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        disabled={loading || success}
                    >
                        Поделиться
                    </Ant.Button>
                </Ant.Space>
            </Ant.Form.Item>
        </Ant.Form>
    );
};

const Result: FC<{ data: Result[] }> = (props) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
        <Ant.Modal
            title="Поделиться результатом"
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            // centered
            width={800}
        >
            <ShareForm
                data={props.data}
                onCancel={() => setOpen(false)} 
            />
        </Ant.Modal>
        <Ant.Result 
            status="success"
            title="Поздравляем! Тестирование пройдено!"
            subTitle="Спасибо. Теперь поделитесь результатом, нажав кнопку «Поделиться»"
            extra={(
                <Ant.Space>
                    <Router.Link to={utils.appLink('')}>
                        <Ant.Button>
                            Вернуться к списку тестов
                        </Ant.Button>
                    </Router.Link>
                    <Ant.Button 
                        type="primary"
                        onClick={() => setOpen(true)}
                    >
                        Поделиться результатом
                    </Ant.Button>
                </Ant.Space>
            )}
        />
        {/* <Ant.Row gutter={[24, 24]}>
            <Ant.Col span={24}>
                <Ant.Typography.Title level={5} style={{ margin: 0 }}>
                    Результаты тестирования
                </Ant.Typography.Title>
            </Ant.Col>
            <Ant.Col span={24}>
                <Ant.Table 
                    size="middle"
                    rowKey={(record) => record.start.toString()}
                    columns={[
                        {
                            title: 'Попытка',
                            render: (_value, _record, index) => index + 1
                        },
                        {
                            title: 'Запомнено',
                            render: (_value, record) => record?.picked || '-'
                        },
                        {
                            title: 'Время выполнения (секунды)',
                            render: (_value, record) => record.end.diff(record.start, 'seconds')
                        }
                    ]}
                    dataSource={props.data || []}
                    pagination={false}
                />
            </Ant.Col>
            <Ant.Col 
                span={24}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Ant.Space>
                        <Router.Link to={utils.appLink('')}>
                            <Ant.Button>
                                Вернуться к списку тестов
                            </Ant.Button>
                        </Router.Link>
                        <Ant.Button 
                            type="primary"
                            onClick={() => setOpen(true)}
                        >
                            Поделиться результатом
                        </Ant.Button>
                    </Ant.Space>
                </div>
            </Ant.Col>
        </Ant.Row> */}
        </>
    )
};

export default Result;
