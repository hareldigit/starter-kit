/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@shared/(.*)$': '<rootDir>/../shared/$1'
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