import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    root: 'eva',
    resolve: {
        alias: {
            '@root': path.resolve(__dirname, 'eva/src')
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
    build: {
        outDir: '../build',
        emptyOutDir: true,
        rollupOptions: {
        },
    },
    plugins: [react()],
});
