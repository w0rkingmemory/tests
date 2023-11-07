import type { FC } from 'react';

import * as utils from '@root/utils/app';

import * as React from 'react';
import * as Router from 'react-router-dom';
// import ApplicationLayout from './layout';

const ApplicationLayout = React.lazy(() => import('./layout'));
const NotFound  = React.lazy(() => import('@root/containers/NotFound'));

const TestsCatalog = React.lazy(() => import('@root/containers/tests'));

const Test1 = React.lazy(() => import('@root/containers/run/1'));


const Application: FC = () => Router.useRoutes([
    {
        path: utils.appLink(''),
        element: <ApplicationLayout />,
        children: [
            {
                path: utils.appLink(''),
                element: <TestsCatalog />
            },
            {
                path: utils.appLink('/1'),
                element: <Test1 />
            },
            {
                path: utils.appLink('/*'),
                element: <NotFound />
            }
        ]
    }
]);

export default Application;
