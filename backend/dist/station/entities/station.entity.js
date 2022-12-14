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
exports.StationEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const depth_entity_1 = require("../../depth/entities/depth.entity");
const typeorm_1 = require("typeorm");
let StationEntity = class StationEntity {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'name' }),
    __metadata("design:type", String)
], StationEntity.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ name: 'longitude' }),
    __metadata("design:type", Number)
], StationEntity.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ name: 'latitude' }),
    __metadata("design:type", Number)
], StationEntity.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => [depth_entity_1.DepthEntity], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => depth_entity_1.DepthEntity, (depths) => depths.station, { nullable: true }),
    __metadata("design:type", Array)
], StationEntity.prototype, "depths", void 0);
StationEntity = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'station' })
], StationEntity);
exports.StationEntity = StationEntity;
//# sourceMappingURL=station.entity.js.map