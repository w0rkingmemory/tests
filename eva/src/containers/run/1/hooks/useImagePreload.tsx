import * as utils from '@root/utils/app';

import { useState, useEffect } from 'react';
import { useImages } from './useImages';

const preloadImage = (src: string) => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function() {
            resolve(img)
        }
        img.onerror = img.onabort = function() {
            reject(src)
        }
        img.src = src
    });
};

export const useImagePreload = () => {
    const items = useImages();
    const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false);

    useEffect(() => {
        let isCancelled = false
    
        async function effect() {
            console.log('PRELOAD')
        
            if (isCancelled) {
                return
            }
        
            const imagesPromiseList: Promise<any>[] = []

            imagesPromiseList.push(preloadImage(utils.appLink(`/interference/back.jpg`)))
            
            for (const i of items) {
                imagesPromiseList.push(preloadImage(utils.appLink(`/interference/${i}.bmp`)))
            }
        
            await Promise.all(imagesPromiseList)
        
            if (isCancelled) {
                return
            }
        
            setImagesPreloaded(true)
        }
    
        effect()
    
        return () => {
            isCancelled = true
        }
    }, [])

    return imagesPreloaded;
};