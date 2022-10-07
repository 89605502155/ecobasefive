import { Injectable } from '@nestjs/common';
import { CreateDotdepthInput } from './dto/create-dotdepth.input';
import { UpdateDotdepthInput } from './dto/update-dotdepth.input';

@Injectable()
export class DotdepthService {
  create(createDotdepthInput: CreateDotdepthInput) {
    return 'This action adds a new dotdepth';
  }

  findAll() {
    return `This action returns all dotdepth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dotdepth`;
  }

  update(id: number, updateDotdepthInput: UpdateDotdepthInput) {
    return `This action updates a #${id} dotdepth`;
  }

  remove(id: number) {
    return `This action removes a #${id} dotdepth`;
  }
}
