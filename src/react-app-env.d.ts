/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_MODE: 'mock' | 'dev' | 'sit' | 'super' | 'prod'
    readonly REACT_APP_BASE_URL: string
  }
}
