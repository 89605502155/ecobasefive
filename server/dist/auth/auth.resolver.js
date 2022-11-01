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
const auth_entity_1 = require("./entities/auth.entity");
const signup_input_1 = require("./dto/signup-input");
const update_auth_input_1 = require("./dto/update-auth.input");
const sign_response_1 = require("./dto/sign-response");
const signin_input_1 = require("./dto/signin-input");
const logout_response_1 = require("./dto/logout-response");
const logout_input_1 = require("./dto/logout-input");
const public_decorator_1 = require("./decorators/public.decorator");
const newTokensResponse_1 = require("./dto/newTokensResponse");
const currentUserLogin_decorator_1 = require("./decorators/currentUserLogin.decorator");
const currentUser_decorator_1 = require("./decorators/currentUser.decorator");
const common_1 = require("@nestjs/common");
const refreshToken_guard_1 = require("./guards/refreshToken.guard");
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    signup(signUpInput) {
        return this.authService.signup(signUpInput);
    }
    signin(signInInput) {
        return this.authService.signin(signInInput);
    }
    findOne(id) {
        return this.authService.findOne(id);
    }
    updateAuth(updateAuthInput) {
        return this.authService.update(updateAuthInput.id, updateAuthInput);
    }
    logout(logoutInput) {
        return this.authService.logout(logoutInput);
    }
    getNewTokens(login, refreshToken) {
        return this.authService.getNewTokens(login, refreshToken);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, graphql_1.Mutation)(() => sign_response_1.SignResponse),
    __param(0, (0, graphql_1.Args)('signUpInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_input_1.SignUpInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "signup", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, graphql_1.Mutation)(() => sign_response_1.SignResponse),
    __param(0, (0, graphql_1.Args)('signInInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_input_1.SignInInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "signin", null);
__decorate([
    (0, graphql_1.Query)(() => auth_entity_1.Auth, { name: 'auth' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_entity_1.Auth),
    __param(0, (0, graphql_1.Args)('updateAuthInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_auth_input_1.UpdateAuthInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "updateAuth", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, graphql_1.Mutation)(() => logout_response_1.LogoutResponse),
    __param(0, (0, graphql_1.Args)('logoutInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [logout_input_1.LogoutInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "logout", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => newTokensResponse_1.NewTokensResponse),
    __param(0, (0, currentUserLogin_decorator_1.CurrentUserLogin)()),
    __param(1, (0, currentUser_decorator_1.CurrentUser)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "getNewTokens", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(() => auth_entity_1.Auth),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map