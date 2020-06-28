import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  //decorator para informar que é um module
  declarations: [
    //aqui são listados todos os componentes, diretivas e pipes que serão utilizados no módulo
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  imports: [
    /*aqui são listados outros módulos que desejemos utilizar no módulo atual ou dentro de um 
    arquivo declarado no metadado "declarations"
    */
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [
/**aqui ficam declarados todos os serviços que venham a ser utilizados 
 * nos componentes declarados neste módulo
 * Serviços de funcionalidades ficam declarados no AppModule para servir
 * de escopo para toda a aplicação. Ex.: Serviços de autenticação de login,
 * guarda de rotas.
 */

  ],
  bootstrap: [AppComponent]
  /**
   * o bootstrap só é encontrado no módulo raiz da aplicação.
   * Ele diz qual componente deve ser instanciado quando se 
   * iniciar a aplicação. Neste caso, o AppComponent. Ele é o
   * componente principal da aplicação onde por exemplo, é 
   * chamado o menu da aplicação.
   */
})
export class AppModule { }
//módulo raiz da aplicação

/*
Módulos

Ajudam a organizar e modularizar.
A medida que a aplicação cresce, vão sendo criados outros 
módulos locais para melhor distribuir arquivos e responsabilidades.

criação de um módulo:
ng g m nome_do_modulo

Quando um módulo é exportado torna-se possível a outro módulo utilizá-lo.
Assim sendo o que é declarado em um módulo que foi exportado pode ser usado em 
outro módulo.
Essa é uma forma de controlar visibilidade de componentes.

*/
