import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Entity, BaseEntity } from 'typeorm';

function createResourceService(repository) {
    class BaseResourceService {
        @InjectRepository(repository) private resourceRepository: Repository<BaseEntity>
        
        async getAll(): Promise<BaseEntity[]> {
            return this.resourceRepository.find();
        }

        async getById(id: number): Promise<BaseEntity> {
            return this.resourceRepository.findOne({ where: { id: id } });
        }

        async create(resource: BaseEntity) {
            const createdT = this.resourceRepository.create(resource);
            await this.resourceRepository.save(resource);
            return createdT
        }


        async update(id: number, resource: BaseEntity) {
            await this.resourceRepository.update(id, resource);
            return this.getById(id);
        }

        async delete(id: number) {
            await this.resourceRepository.delete(id)
            return { deleted: true }
        }
    }
    return BaseResourceService;
}
