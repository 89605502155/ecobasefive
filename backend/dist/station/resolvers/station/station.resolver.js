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
exports.StationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const station_entity_1 = require("../../entities/station.entity");
const station_service_1 = require("../../services/station/station.service");
let StationResolver = class StationResolver {
    constructor(stationService) {
        this.stationService = stationService;
    }
    async getAll() {
        return this.stationService.getAll();
    }
};
__decorate([
    (0, graphql_1.Query)(() => [station_entity_1.StationEntity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StationResolver.prototype, "getAll", null);
StationResolver = __decorate([
    (0, graphql_1.Resolver)('Station'),
    __metadata("design:paramtypes", [station_service_1.StationService])
], StationResolver);
exports.StationResolver = StationResolver;
//# sourceMappingURL=station.resolver.js.map