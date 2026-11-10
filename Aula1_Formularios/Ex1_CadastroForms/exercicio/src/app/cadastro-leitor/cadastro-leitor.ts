import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { Leitor } from '../models/leitor';

// TODO 1: Importe FormsModule e NgForm de '@angular/forms' e a interface Leitor de '../models/leitor'.

@Component({
  selector: 'app-cadastro-leitor',
  import: [FormsModule],
  templateUrl: './cadastro-leitor.html',
  styleUrl: './cadastro-leitor.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroLeitor {

  leitor: Leitor = {nome: '', email: '', aceitaTermos: false};

  mensagem = signal ('');

  salvar(form: NgForm): void {
    if (form.invalid) return;
    this.mensagem.set(`Leitor "${this.leitor.nome}" cadastrado com sucesso!`);
    form.resetForm({ nome: '', email: '', aceitaTermos: false });
  }
}
