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
exports.DepthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const depth_entity_1 = require("../../entities/depth.entity");
const depth_service_1 = require("../../services/depth/depth.service");
let DepthResolver = class DepthResolver {
    constructor(depthService) {
        this.depthService = depthService;
    }
    async getAllDepths() {
        return this.depthService.getAllDepths();
    }
};
__decorate([
    (0, graphql_1.Query)(() => [depth_entity_1.DepthEntity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepthResolver.prototype, "getAllDepths", null);
DepthResolver = __decorate([
    (0, graphql_1.Resolver)('Depth'),
    __metadata("design:paramtypes", [depth_service_1.DepthService])
], DepthResolver);
exports.DepthResolver = DepthResolver;
//# sourceMappingURL=depth.resolver.js.map