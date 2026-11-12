// contato.ts - FORMULÁRIO TEMPLATE-DRIVEN: a "inteligência" do form fica no HTML (ngModel).
// Este arquivo JÁ ESTÁ PRONTO. O TODO 2 é no contato.html.
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MensagemContato } from '../../models/mensagem-contato';

@Component({
  selector: 'app-contato',
  imports: [FormsModule], // FormsModule libera ngModel, ngForm e (ngSubmit) no HTML
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  // Objeto ligado aos campos pelo [(ngModel)]: o que o usuário digita cai aqui (two-way binding).
  contato: MensagemContato = { nome: '', email: '', mensagem: '' };

  // Guarda a última mensagem enviada para mostrar o aviso de sucesso.
  enviada = signal<MensagemContato | null>(null);

  // Chamado pelo (ngSubmit) do <form>. Recebe o formulário inteiro (#f="ngForm").
  enviar(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched(); // mostra os erros de todos os campos
      return;
    }
    this.enviada.set({ ...this.contato });
    form.resetForm({ nome: '', email: '', mensagem: '' }); // limpa os campos e o estado (touched/submitted)
  }
}
