import { HttpCode, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entity";
import { ILike, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ) { }

    async findAll(): Promise<Categoria[]> {
        return this.categoriaRepository.find();
    }

    async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOneBy({ id });
        if (!categoria) {
            throw new HttpException(`Categoria com id ${id} não encontrada`, HttpStatus.NOT_FOUND);
        }
        return categoria;
    }

    async findbyNome(nome: string): Promise<Categoria[]> {
        return this.categoriaRepository.find({
            where: { nome: ILike(`%${nome}%`) }
        });
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria): Promise<Categoria> {

        const buscaCategoria = await this.categoriaRepository.findOne({
            where: { id: categoria.id },
        });

        if (!buscaCategoria) {
            throw new HttpException(
                `Categoria com id ${categoria.id} não encontrada`,
                HttpStatus.NOT_FOUND,
            );
        }

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<void> {
        const result = await this.categoriaRepository.delete(id);
        if (result.affected === 0) {
            throw new Error(`Categoria with ID ${id} not found`);
        }
    }
}