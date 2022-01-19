import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Usuario {
    id: number;


    @IsString()
    @IsNotEmpty({
        message: 'nome é um campo obrigatorio'
    })
    nome: string;

    @IsEmail()
    @IsNotEmpty({
        message: 'email é um campo obrigatorio'
    })
    email: string;

    @IsNotEmpty({
        message: 'senha é um campo obrigatorio'
    })
    senha: string;

    dataCadastro: Date;
}