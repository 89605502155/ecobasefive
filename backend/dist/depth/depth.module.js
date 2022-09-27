"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepthModule = void 0;
const common_1 = require("@nestjs/common");
const depth_service_1 = require("./services/depth/depth.service");
const typeorm_1 = require("@nestjs/typeorm");
const depth_entity_1 = require("./entities/depth.entity");
const station_entity_1 = require("../station/entities/station.entity");
let DepthModule = class DepthModule {
};
DepthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([depth_entity_1.DepthEntity, station_entity_1.StationEntity])
        ],
        providers: [depth_service_1.DepthService]
    })
], DepthModule);
exports.DepthModule = DepthModule;
//# sourceMappingURL=depth.module.js.map