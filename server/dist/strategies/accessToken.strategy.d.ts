import { ConfigService } from '@nestjs/config';
import { JwtPayload } from 'src/auth/types';
declare const AccessTokenStrategy_base: new (...args: any[]) => any;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    config: ConfigService;
    constructor(config: ConfigService);
    validate(payload: JwtPayload): Promise<JwtPayload>;
}
export {};
