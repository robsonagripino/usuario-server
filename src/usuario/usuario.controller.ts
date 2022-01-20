import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NotFoundError } from "rxjs";
import { NestResponse } from "src/core/http/nest-response";
import { NestResponseBuild } from "../core/http/nest-response-build";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService){}

    @Get(':nome')
    public buscaPorUsuario(@Param('nome') nome) {
        const usuarioEncontrado = this.usuarioService.buscaPorUsuario(nome);
        
        if(!usuarioEncontrado) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuário não encontrado.'
            });
        }
        
        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario): NestResponse {
        //throw new Error('Erro no cadastro do usuario');
        const usuarioCriado = this.usuarioService.cria(usuario);
        
        return new NestResponseBuild()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({
                'Location': `/users/${usuarioCriado.nome}`
            })
            .comBody({
                usuarioCriado
            })
            .build();
        // res.status(HttpStatus.CREATED)
        //     .location(`/users/${usuarioCriado.nome}`)
        //     .json(usuarioCriado);

        //return usuarioCriado;
    }
}