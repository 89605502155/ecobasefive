import { Injectable } from '@nestjs/common';
import { ActivateRoleDto, CreateRoleDto, FindByNameRoleDto, UpdateRoleDto } from '../dtos';
import { Role } from '../entities';
import { RoleRepository } from '../repositories';

@Injectable()
export class RoleService {
    constructor(private readonly roleRepository: RoleRepository) {}

    async getRoles(): Promise<Role[]> {
        return await this.roleRepository.findAll();
    }

    async getRole(roleId: number): Promise<Role> {
        return await this.roleRepository.findOneById(roleId);
    }

    async getRoleByName(dto: FindByNameRoleDto): Promise<Role> {
        return await this.roleRepository.findOneByName(dto);
    }

    async createRole(dto: CreateRoleDto): Promise<Role> {
        return await this.roleRepository.createRole(dto);
    }

    async updateRole(roleId: number, dto: UpdateRoleDto): Promise<Role> {
        return await this.roleRepository.updateRole(roleId, dto);
    }

    async deleteRole(roleId: number): Promise<Role> {
        return await this.roleRepository.deleteRole(roleId);
    }

    async activeRole(roleId: number, status: string, dto: ActivateRoleDto): Promise<Role> {
        return await this.roleRepository.activeRole(roleId, status, dto);
    }
}