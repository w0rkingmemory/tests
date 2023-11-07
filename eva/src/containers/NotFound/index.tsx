import * as React from 'react';
import * as Ant from 'antd';

const NotFound: React.FC = () => {
    return (
        <Ant.Result status='404' title="Page not found." />
    );
};

export default NotFound;
