import { Component } from '@angular/core';
import { LibrasService } from './services/libras.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pergunta: string = '';
  resposta: string = '';

  constructor(private librasService: LibrasService) {}

  enviarPergunta(): void {

    if (!this.pergunta.trim()) {
      return;
    }

    this.librasService.perguntar(this.pergunta).subscribe(
      resultado => {
        this.resposta = resultado.resposta;
      },
      erro => {
        console.error('Erro ao consultar o agente:', erro);
        this.resposta = 'Não foi possível consultar o assistente.';
      }
    );
  }
}