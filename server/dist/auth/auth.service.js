"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
let AuthService = class AuthService {
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async signup(signUpInput) {
        const hashedPassword = await argon.hash(signUpInput.password);
        const user = await this.prisma.user.create({
            data: {
                name: signUpInput.name,
                email: signUpInput.email,
                login: signUpInput.login,
                hashedPassword: hashedPassword,
                university: signUpInput.university,
                surname: signUpInput.surname,
                country: signUpInput.country,
            }
        });
        const { accessToken, refreshToken } = await this.createToken(user.login, user.email);
        await this.updateRefreshToken(user.login, refreshToken);
        return { accessToken, refreshToken, user };
    }
    async signin(signInInput) {
        const user = await this.prisma.user.findUnique({ where: {
                login: signInInput.login
            } });
        if (!user) {
            throw new common_1.ForbiddenException('Access Denied');
        }
        const doPasswordMatch = await argon.verify(user.hashedPassword, signInInput.password);
        if (!doPasswordMatch) {
            throw new common_1.ForbiddenException('Access Denied');
        }
        const { accessToken, refreshToken } = await this.createToken(user.login, user.email);
        await this.updateRefreshToken(user.login, refreshToken);
        return { accessToken, refreshToken, user };
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthInput) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
    async createToken(login, email) {
        const accessToken = this.jwtService.sign({
            login,
            email
        }, { expiresIn: '10s', secret: this.configService.get('ACCESS_TOKEN_SECRET') });
        const refreshToken = this.jwtService.sign({
            login,
            email,
            accessToken
        }, { expiresIn: '1d', secret: this.configService.get('REFRESH_TOKEN_SECRET') });
        return { accessToken, refreshToken };
    }
    async updateRefreshToken(loginIn, refreshToken) {
        const hashedRefreshToken = await argon.hash(refreshToken);
        await this.prisma.user.update({
            where: {
                login: loginIn
            }, data: {
                hashedRefreshToken
            }
        });
    }
    async logout(logoutInput) {
        await this.prisma.user.updateMany({
            where: {
                login: logoutInput.login,
                hashedRefreshToken: { not: null }
            }, data: {
                hashedRefreshToken: null
            }
        });
        return { loggedOut: true };
    }
    async getNewTokens(loginIn, rt) {
        const user = await this.prisma.user.findUnique({
            where: {
                login: loginIn
            }
        });
        if (!user) {
            throw new common_1.ForbiddenException('Access Denied');
        }
        const dorefreshTokensMatch = await argon.verify(user.hashedRefreshToken, rt);
        if (!dorefreshTokensMatch) {
            throw new common_1.ForbiddenException('Access Denied');
        }
        const { accessToken, refreshToken } = await this.createToken(user.login, user.email);
        await this.updateRefreshToken(user.login, refreshToken);
        return { accessToken, refreshToken, user };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map