import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FiltroDeExcecaoHttp } from './common/filtro/filtro-de-excecao-http.filter';
import { TransformaRespostaInterceptor } from './core/http/transformar-resposta-interceptor';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },{
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor
    }],
})
export class AppModule {}
