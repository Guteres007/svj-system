/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'production' | 'test' | 'development';
    APP_ENV:
      | 'production'
      | 'staging'
      | 'test'
      | 'development'
      | 'local'
      | 'unknown';
    LOG_LEVEL:
      | 'error'
      | 'warn'
      | 'info'
      | 'http'
      | 'verbose'
      | 'debug'
      | 'silly';
    LOG_FORMAT: 'json' | 'pretty';
    PORT?: number;
    TZ?: 'UTC' | 'Europe/Prague' | string;
    DATABASE_URL: string;
    SENTRY_DSN: string;
    GOOGLE_CLOUD_CREDENTIALS: string;
    GOOGLE_STORAGE_BUCKET: string;
    GOOGLE_MAPS_API_KEY: string;
    JWT_SECRET: string;
    ACCESS_TOKEN_EXPIRATION: string;
    REFRESH_TOKEN_EXPIRATION: string;
    USER_INVITE_EXPIRATION: string;
    APP_URL: string;
    RECAPTCHA_SECRET_KEY: string;
    RESEND_API_KEY: string;
    RESEND_FROM_EMAIL: string;
    REDIS_URL: string;
    DIGITAL_OCEAN_SPACE_ACCESS_KEY: string;
    DIGITAL_OCEAN_SPACE_SECRET_KEY: string;
    DIGITAL_OCEAN_SPACE_BUCKET_NAME: string;
  }
}
