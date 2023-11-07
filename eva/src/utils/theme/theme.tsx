import type { FC, PropsWithChildren } from 'react';
import type { ThemeConfig } from 'antd/lib/config-provider/context';

import defaultTheme from 'antd/lib/theme/themes/default';
import darkTheme from 'antd/lib/theme/themes/dark';

import * as React from 'react';
import * as Ant from 'antd';


const dark: ThemeConfig = {
    algorithm: darkTheme,
    components: {
        Layout: {
            headerHeight: 48
        }
    }
};
const _default_: ThemeConfig = {
    algorithm: defaultTheme,
    components: {
        Layout: {
            headerHeight: 48
        }
    }
};


const ThemeContext = React.createContext({
    dark: true,
    onSwitch: () => {}
})

const ThemeConfig: FC<PropsWithChildren> = (props) => {
    const context = React.useContext(ThemeContext);

    return (
        <Ant.ConfigProvider
            theme={context.dark ? dark : _default_}
        >
            {props.children}
        </Ant.ConfigProvider>
    );
};

const ThemeProvider: FC<PropsWithChildren> = (props) => {
    const [dark, setDark] = React.useState(true);

    return (
        <ThemeContext.Provider
            value={{
                dark,
                onSwitch: () => setDark(!dark)
            }}
        >
            <ThemeConfig {...props} />
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);
export default ThemeProvider;
