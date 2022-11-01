export type JwtPayload={
    email:string;
    login:string;
};
export type JwtPayloadWithRefreshToken = JwtPayload & {
    refreshToken: string;
}