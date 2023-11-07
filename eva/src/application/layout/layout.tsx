import type { FC } from 'react';

import * as utils from '@root/utils/app';
import { useTheme } from '@root/utils/theme';

import * as React from 'react';
import * as Router from 'react-router-dom';
import * as Ant from 'antd';


const AppplicationHeader: FC = () => {
    const { token } = Ant.theme.useToken();
    const theme = useTheme();

    return (
        <Ant.Layout.Header
            style={{
                background: token.colorBgContainer,
                paddingLeft: token.paddingXL,
                paddingRight: token.paddingXL,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
                // padding: 0
            }}
        >
            <Router.Link to={utils.appLink('')}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                        <Ant.Typography.Title 
                            style={{ 
                                margin: 0,
                                marginRight: token.marginLG
                            }} 
                            level={5}
                        >
                            Eva
                        </Ant.Typography.Title>
                        <Ant.Typography.Text type='secondary'>
                            Tests Platform
                        </Ant.Typography.Text>
                </div>
            </Router.Link>
            <div>
                <Ant.Switch 
                    checkedChildren="Light Mode"
                    unCheckedChildren="Dark Mode"
                    checked={theme.dark}
                    onChange={() => theme.onSwitch()}
                />
            </div>
        </Ant.Layout.Header>
    );
};

const ApplicationContent: FC = () => {
    const { token } = Ant.theme.useToken();
    
    return (
        <Ant.Layout.Content
            style={{
                padding: token.paddingXL
            }}
        >
            <React.Suspense>
                <Router.Outlet />
            </React.Suspense>
        </Ant.Layout.Content>
    );
};

const ApplicationLayout: FC = () => {
    return (
        <Ant.Layout
            style={{
                width: '100vw',
                height: '100vh'
            }}
        >
            <AppplicationHeader />
            <ApplicationContent />
        </Ant.Layout>
    );
};

export default ApplicationLayout; 