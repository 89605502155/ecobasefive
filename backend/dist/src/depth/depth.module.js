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
const depth_service_1 = require("./depth.service");
const depth_resolver_1 = require("./depth.resolver");
let DepthModule = class DepthModule {
};
DepthModule = __decorate([
    (0, common_1.Module)({
        providers: [depth_resolver_1.DepthResolver, depth_service_1.DepthService]
    })
], DepthModule);
exports.DepthModule = DepthModule;
//# sourceMappingURL=depth.module.js.map