import { Module } from "@nestjs/common";
import { IsNomedeUsuarioUnicoConstraint } from "./is-nome-de-usuario-unico";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService, IsNomedeUsuarioUnicoConstraint]
})
export class UsuarioModule {
    
}