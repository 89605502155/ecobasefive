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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(userRepository, configService) {
        this.userRepository = userRepository;
        this.configService = configService;
    }
    async createUser(createUserInput) {
        const userByEmal = await this.userRepository.findOne({ where: {
                email: createUserInput.email
            } });
        const userByLogin = await this.userRepository.findOne({ where: {
                login: createUserInput.login
            } });
        if (userByEmal || userByLogin) {
            throw new common_1.HttpException('Email or login are taken', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const newUser = new user_entity_1.UserEntity();
        Object.assign(newUser, createUserInput);
        return await this.userRepository.save(newUser);
    }
    generateJwt(user) {
        return (0, jsonwebtoken_1.sign)({
            login: user.login,
            emeil: user.email,
            country: user.country,
            university: user.university,
            status: user.status
        }, 'laser');
    }
    buildUserResponse(user) {
        return {
            user: Object.assign(Object.assign({}, user), { token: this.generateJwt(user) })
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map