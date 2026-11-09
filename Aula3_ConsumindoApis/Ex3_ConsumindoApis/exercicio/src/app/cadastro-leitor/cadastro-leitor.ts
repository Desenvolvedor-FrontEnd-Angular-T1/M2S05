// cadastro-leitor.ts - formulário TEMPLATE-DRIVEN: a "inteligência" mora no TEMPLATE (ngModel + validadores em atributos).
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';   // FormsModule libera ngModel, ngForm e os validadores por atributo
import { Leitor } from '../models/leitor';

@Component({
  selector: 'app-cadastro-leitor',
  imports: [FormsModule],
  templateUrl: './cadastro-leitor.html',
  styleUrl: './cadastro-leitor.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroLeitor {
  // Modelo do formulário: o [(ngModel)] do template lê e escreve nestas propriedades.
  leitor: Leitor = { nome: '', email: '', aceitaTermos: false };

  // Signal para a mensagem de sucesso (signal = a tela atualiza sozinha, também em apps zoneless).
  mensagem = signal('');

  // Recebe o NgForm (variável #f do template) para consultar a validade e limpar o formulário.
  salvar(form: NgForm): void {
    if (form.invalid) return;                                               // formulário inválido: não faz nada
    this.mensagem.set(`Leitor "${this.leitor.nome}" cadastrado com sucesso!`);
    form.resetForm({ nome: '', email: '', aceitaTermos: false });           // limpa valores E volta tocado/alterado para "não"
  }
}
