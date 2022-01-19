import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService){}

    @Get(':nome')
    public buscaPorUsuario(@Param('nome') nome) {
        const usuarioEncontrado = this.usuarioService.buscaPorUsuario(nome);
        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        //throw new Error('Erro no cadastro do usuario');
        const usuarioCriado = this.usuarioService.cria(usuario);
        return usuarioCriado;
    }
}