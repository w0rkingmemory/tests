import { useState, useEffect } from 'react';
import { useImages } from './useImages';

import { shuffle } from './helpers';
import { sampleSize } from 'lodash';


export const useStepItems = (picked: number[]): number[] => {
    const images = useImages();
    const [items, setItems] = useState<number[]>([]);

    useEffect(() => {
        // First Step
        if (picked.length == 0) {
            const randomItems = sampleSize(images, 3);
            const newItems = randomItems.concat(Array.from(Array(27), () => -1));

            shuffle(newItems);
            setItems(newItems)

            return;
        };

        const unPickedImages = images.filter((item) => !picked.includes(item));
        const unPickedSize = picked.length < 28 ? 3 : 30 - picked.length;
        const zeroSize = 30 - picked.length - unPickedSize;

        const unPickedItems = sampleSize(unPickedImages, unPickedSize);
        const zeroItems = Array.from(Array(zeroSize), () => -1);

        const newItems = picked.concat(unPickedItems).concat(zeroItems);

        shuffle(newItems);
        setItems(newItems);

    }, [picked]);

    return items;
};