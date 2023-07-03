interface ImportMeta {
    env: {
        [key: string]: string;
        VITE_APP_TITLE: string;
        VITE_STRIPE_PUBLISHABLE_KEY: string;
        MODE: 'development' | 'production';
        BASE_URL: string;
        PROD: boolean;
        DEV: boolean;
    };
}
