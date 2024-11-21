declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_URL: string;
      SITE_NAME: string;
      ZENN_USERNAME: string;
    }
  }
}

export {};
