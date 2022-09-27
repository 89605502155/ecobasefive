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
exports.StationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const depth_entity_1 = require("../../../depth/entities/depth.entity");
const depth_service_1 = require("../../../depth/services/depth/depth.service");
const station_entity_1 = require("../../entities/station.entity");
const station_service_1 = require("../../services/station/station.service");
let StationResolver = class StationResolver {
    constructor(stationService, depthService) {
        this.stationService = stationService;
        this.depthService = depthService;
    }
    async getAll() {
        return this.stationService.getAll();
    }
    async getAllDepths() {
        return this.depthService.getAllDepths();
    }
    async getDepthByStation(stationName) {
        return this.depthService.getDepthByStation(stationName);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [station_entity_1.StationEntity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StationResolver.prototype, "getAll", null);
__decorate([
    (0, graphql_1.Query)(() => [depth_entity_1.DepthEntity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StationResolver.prototype, "getAllDepths", null);
__decorate([
    (0, graphql_1.Query)(() => [depth_entity_1.DepthEntity]),
    __param(0, (0, graphql_1.Args)('station')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StationResolver.prototype, "getDepthByStation", null);
StationResolver = __decorate([
    (0, graphql_1.Resolver)('Station'),
    __metadata("design:paramtypes", [station_service_1.StationService,
        depth_service_1.DepthService])
], StationResolver);
exports.StationResolver = StationResolver;
//# sourceMappingURL=station.resolver.js.map