import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@shared': resolve(__dirname, '../shared')
        },
    },
    build: {
        target: 'esnext',
        outDir: 'dist',
        rollupOptions: {
            input: 'src/app.ts',
            output: {
                format: 'esm',
            },
        },
    },
    test: {
        globals: true,
        environment: 'node',
        setupFiles: './src/test/setup.ts',
        env: {
            MODE: 'test'
        },
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'src/test/',
                '**/*.test.ts',
                '**/*.spec.ts',
                '**/*.d.ts',
            ],
        },
    },
})
