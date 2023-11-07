import * as T from './tests.types';

import * as utils from '@root/utils/app';

import { createReducer } from '@reduxjs/toolkit';


const initialState = {
    tests: [
        {
            id: 1,
            title: 'Interference',
            description: `На экране несколько раз будут предъявляться разные объекты, отличающиеся по размеру, цвету и ориентации в пространстве.
            Ваша задача, отмечать каждый раз тот объект, который НЕ БЫЛ ОТМЕЧЕН РАНЕЕ.
            Задание будет повторяться три раза. 
            `,
            icon: utils.appLink('/icons/interference.svg'),
            rules: {
                maxTime: null,
                maxAttempt: 3
            }
        }
    ] as T.Test[]
};

const tests = createReducer(initialState, (builder) => {

});


export { tests };