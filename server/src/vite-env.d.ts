/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly NODE_ENV: string
    readonly PORT: string
    readonly MONGODB_URI: string
    readonly JWT_SECRET: string
    readonly VITE_CORS_ORIGIN: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}