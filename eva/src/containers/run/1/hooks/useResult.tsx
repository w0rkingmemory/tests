import moment from 'moment';

import * as react from 'react';

export interface Result {
    key: number;
    picked: number;
    start: moment.Moment;
    end: moment.Moment;
};

export const useResult = () => {
    const [status, setStatus] = react.useState<'init' | 'start' | 'complete'>('init');
    const [result, setResult] = react.useState<Result[]>([]);

    // Curr State
    const [start, setStart] = react.useState<moment.Moment>(moment());
    const [attempt, setAttempt] = react.useState<number>(0);
    const [picked, setPicked] = react.useState<number[]>([])

    // Helpers
    const [openAttempt, setOpenAttempt] = react.useState(false);

    const saveResult = () => {
        setResult([
            ...result,
            {
                key: result.length + 1,
                picked: picked.length,
                start: start,
                end: moment()
            }
        ]);
    };

    react.useEffect(() => {
        if (picked.length > 29) {
            saveResult();
            setStatus('complete');
        };
    }, [picked])

    react.useEffect(() => {})

    // Debug
    // console.debug({ result })
    

    return {
        status,
        result,
        setStatus,
        // Curr State
        picked,
        openAttempt,
        // Action
        onClose: () => {
            setStatus('init');
            setResult([]);
            setStart(moment());
            setAttempt(0);
            setPicked([]);
        },
        onStart: () => {
            setStatus('start');
            setStart(moment());
        },
        onNextAttempt: () => {
            setAttempt(attempt + 1);
            setPicked([]);
            setStart(moment());
            setOpenAttempt(false);
        },
        onPick: (item: number) => {
            if (picked.includes(item)) {
                saveResult();
                if (attempt < 2) 
                    setOpenAttempt(true);
                else
                    setStatus('complete');
                return;
            };

            if (picked.length + 1 > 30) {
                return;
            };

            setPicked([...picked, item]);
            return;
        }
    }; 
};
