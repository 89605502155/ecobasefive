declare const _default: () => {
    port: number;
    expiresTime: string;
    db: {
        host: string;
        port: string;
        username: string;
        password: string;
        name: string;
        synchronize: boolean;
        options: {
            trustServerCertificate: boolean;
        };
    };
    redis: {
        host: string;
        port: string;
        password: string;
    };
};
export default _default;
