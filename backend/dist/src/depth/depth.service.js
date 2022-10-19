"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepthService = void 0;
const common_1 = require("@nestjs/common");
let DepthService = class DepthService {
    create(createDepthInput) {
        return 'This action adds a new depth';
    }
    findAll() {
        return `This action returns all depth`;
    }
    findOne(id) {
        return `This action returns a #${id} depth`;
    }
    update(id, updateDepthInput) {
        return `This action updates a #${id} depth`;
    }
    remove(id) {
        return `This action removes a #${id} depth`;
    }
};
DepthService = __decorate([
    (0, common_1.Injectable)()
], DepthService);
exports.DepthService = DepthService;
//# sourceMappingURL=depth.service.js.map