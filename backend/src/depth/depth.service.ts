import { Injectable } from '@nestjs/common';
import { CreateDepthInput } from './dto/create-depth.input';
import { UpdateDepthInput } from './dto/update-depth.input';

@Injectable()
export class DepthService {
  create(createDepthInput: CreateDepthInput) {
    return 'This action adds a new depth';
  }

  findAll() {
    return `This action returns all depth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} depth`;
  }

  update(id: number, updateDepthInput: UpdateDepthInput) {
    return `This action updates a #${id} depth`;
  }

  remove(id: number) {
    return `This action removes a #${id} depth`;
  }
}
