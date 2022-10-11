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
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("./auth.service");
const create_user_input_1 = require("./inputs/create-user.input");
const return_after_creating_entity_1 = require("./entities/return-after-creating.entity");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    async createUser(createUserInput) {
        const user = await this.authService.createUser(createUserInput);
        return this.authService.buildUserResponse(user);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => return_after_creating_entity_1.ReturnAfterCreatingInput),
    __param(0, (0, graphql_1.Args)('createUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "createUser", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)('User'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map