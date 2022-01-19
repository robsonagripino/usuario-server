import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico";

export class Usuario {
    id: number;

    @Expose({
        name: 'username'
    })
    @IsNomeDeUsuarioUnico({
        message: 'nome do usuario precisa ser unico'
    })
    @IsString({
        message: 'usuario precisa ser uma string'
    })
    @IsNotEmpty({
        message: 'nome é um campo obrigatorio'
    })
    nome: string;


    @IsEmail()
    @IsNotEmpty({
        message: 'email é um campo obrigatorio'
    })
    email: string;

    @Expose({
        name: 'password'
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'senha é um campo obrigatorio'
    })
    senha: string;


    @Expose({
        name: 'joinDate'
    })
    dataCadastro: Date;
}