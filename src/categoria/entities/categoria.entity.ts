import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_categoria'})
export class Categoria {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length:255, nullable:false })
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length:500, nullable:true })
    descricao: string;
}