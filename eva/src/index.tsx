import './index.scss';

import * as store from './utils/store'

import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import ThemeProvider from './utils/theme/theme';

import Application from './application';

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ThemeProvider>
        <Provider store={store.store}>
            <BrowserRouter>
                <Application />
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
);
