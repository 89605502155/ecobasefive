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
exports.DepthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const depth_service_1 = require("./depth.service");
const depth_entity_1 = require("./entities/depth.entity");
const create_depth_input_1 = require("./dto/create-depth.input");
const update_depth_input_1 = require("./dto/update-depth.input");
let DepthResolver = class DepthResolver {
    constructor(depthService) {
        this.depthService = depthService;
    }
    createDepth(createDepthInput) {
        return this.depthService.create(createDepthInput);
    }
    findAll() {
        return this.depthService.findAll();
    }
    findOne(id) {
        return this.depthService.findOne(id);
    }
    updateDepth(updateDepthInput) {
        return this.depthService.update(updateDepthInput.id, updateDepthInput);
    }
    removeDepth(id) {
        return this.depthService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => depth_entity_1.Depth),
    __param(0, (0, graphql_1.Args)('createDepthInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_depth_input_1.CreateDepthInput]),
    __metadata("design:returntype", void 0)
], DepthResolver.prototype, "createDepth", null);
__decorate([
    (0, graphql_1.Query)(() => [depth_entity_1.Depth], { name: 'depth' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepthResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => depth_entity_1.Depth, { name: 'depth' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DepthResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => depth_entity_1.Depth),
    __param(0, (0, graphql_1.Args)('updateDepthInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_depth_input_1.UpdateDepthInput]),
    __metadata("design:returntype", void 0)
], DepthResolver.prototype, "updateDepth", null);
__decorate([
    (0, graphql_1.Mutation)(() => depth_entity_1.Depth),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DepthResolver.prototype, "removeDepth", null);
DepthResolver = __decorate([
    (0, graphql_1.Resolver)(() => depth_entity_1.Depth),
    __metadata("design:paramtypes", [depth_service_1.DepthService])
], DepthResolver);
exports.DepthResolver = DepthResolver;
//# sourceMappingURL=depth.resolver.js.map