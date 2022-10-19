import { CreateDepthInput } from './dto/create-depth.input';
import { UpdateDepthInput } from './dto/update-depth.input';
export declare class DepthService {
    create(createDepthInput: CreateDepthInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDepthInput: UpdateDepthInput): string;
    remove(id: number): string;
}
