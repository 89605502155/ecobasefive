import { Injectable } from '@nestjs/common';
import { CreateStationInput } from './dto/create-station.input';
import { UpdateStationInput } from './dto/update-station.input';

@Injectable()
export class StationService {
  create(createStationInput: CreateStationInput) {
    return 'This action adds a new station';
  }

  findAll() {
    return `This action returns all station`;
  }

  findOne(name: string) {
    return `This action returns a #${name} station`;
  }

  update(name: string, updateStationInput: UpdateStationInput) {
    return `This action updates a #${name} station`;
  }

  remove(name: string) {
    return `This action removes a #${name} station`;
  }
}
