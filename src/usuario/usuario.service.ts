import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {

    private usuarios: Array<Usuario> = [{
        id: 1,
        nome: 'robson',
        email: 'parkrobson@gmail.com',
        senha: '1234',
        dataCadastro: new Date()
    }, {
        id: 2,
        nome: 'maria',
        email: 'parkmaria@gmail.com',
        senha: '1234',
        dataCadastro: new Date()
    }];

    public buscaPorUsuario(nome: string): Usuario {
        const usuarioEncontrado = this.usuarios.find(usuario => usuario.nome === nome);
        return usuarioEncontrado;
    }
    
    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);
        return usuario;
    }
}

// NOME: ROBSON AGRIPINO DA SILVA
// MATRICULA:	2014032500
// ORIENTADOR:  JOÃO BATISTA BORGES NETO
// COORIENTADOR: LUIZ PAULO DE ASSIS BARBOSA