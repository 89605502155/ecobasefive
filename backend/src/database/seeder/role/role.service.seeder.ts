import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//TODO: It is hard place. I will remade this.
@Injectable()
export class RoleSeederService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) {}

    createRoles(): Array<Promise<Role>> {
        return rolesSeed.map(async (role: IRole) => {
            const { name } = role;
            const roleN = await this.roleRepository.findOne({ name });
            if (!roleN) {
                const createRole = await this.roleRepository.create(role);
                return await this.roleRepository.save(createRole);
            } else return roleN;
        });
    }
}
