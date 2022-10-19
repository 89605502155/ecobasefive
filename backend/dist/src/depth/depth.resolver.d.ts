import { DepthService } from './depth.service';
import { CreateDepthInput } from './dto/create-depth.input';
import { UpdateDepthInput } from './dto/update-depth.input';
export declare class DepthResolver {
    private readonly depthService;
    constructor(depthService: DepthService);
    createDepth(createDepthInput: CreateDepthInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateDepth(updateDepthInput: UpdateDepthInput): string;
    removeDepth(id: number): string;
}
