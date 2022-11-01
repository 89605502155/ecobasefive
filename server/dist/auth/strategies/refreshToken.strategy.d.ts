import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { JwtPayload, JwtPayloadWithRefreshToken } from 'src/auth/types';
declare const RefreshTokenStrategy_base: new (...args: any[]) => any;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    config: ConfigService;
    constructor(config: ConfigService);
    validate(req: Request, payload: JwtPayload): JwtPayloadWithRefreshToken;
}
export {};
