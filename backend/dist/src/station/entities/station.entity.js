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
exports.Station = void 0;
const graphql_1 = require("@nestjs/graphql");
const depth_entity_1 = require("../../depth/entities/depth.entity");
const typeorm_1 = require("typeorm");
let Station = class Station {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], Station.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryColumn)({ name: 'name' }),
    __metadata("design:type", String)
], Station.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ name: 'longitude' }),
    __metadata("design:type", Number)
], Station.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ name: 'latitude' }),
    __metadata("design:type", Number)
], Station.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => [depth_entity_1.Depth], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => depth_entity_1.Depth, (depths) => depths.station, { nullable: true }),
    __metadata("design:type", Array)
], Station.prototype, "depths", void 0);
Station = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'station' })
], Station);
exports.Station = Station;
//# sourceMappingURL=station.entity.js.map