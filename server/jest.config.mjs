/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@shared/(.*)$': '<rootDir>/../shared/$1',
    },
    setupFilesAfterEnv: ['./src/test/setup.ts'],
    coverageProvider: 'v8',
    coverageReporters: ['text', 'json', 'html'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/src/test/',
        '.test.ts$',
        '.spec.ts$',
        '.d.ts$'
    ]
};