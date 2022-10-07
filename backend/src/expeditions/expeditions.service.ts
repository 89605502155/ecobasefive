import { Injectable } from '@nestjs/common';
import { CreateExpeditionInput } from './dto/create-expedition.input';
import { UpdateExpeditionInput } from './dto/update-expedition.input';

@Injectable()
export class ExpeditionsService {
  create(createExpeditionInput: CreateExpeditionInput) {
    return 'This action adds a new expedition';
  }

  findAll() {
    return `This action returns all expeditions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expedition`;
  }

  update(id: number, updateExpeditionInput: UpdateExpeditionInput) {
    return `This action updates a #${id} expedition`;
  }

  remove(id: number) {
    return `This action removes a #${id} expedition`;
  }
}
