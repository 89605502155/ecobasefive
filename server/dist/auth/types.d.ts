export declare type JwtPayload = {
    email: string;
    login: string;
};
export declare type JwtPayloadWithRefreshToken = JwtPayload & {
    refreshToken: string;
};
