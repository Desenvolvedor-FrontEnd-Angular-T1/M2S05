// cadastro-leitor.ts - formulário TEMPLATE-DRIVEN: a "inteligência" mora no TEMPLATE (ngModel + validadores em atributos).
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
// TODO 1: Importe FormsModule e NgForm de '@angular/forms' e a interface Leitor de '../models/leitor'.

@Component({
  selector: 'app-cadastro-leitor',
  // TODO 1: Adicione imports: [FormsModule] no @Component (sem isso o template não conhece o ngModel).
  templateUrl: './cadastro-leitor.html',
  styleUrl: './cadastro-leitor.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroLeitor {
  // TODO 1: Crie o objeto leitor (nome, email, aceitaTermos), o signal mensagem e o método salvar(form: NgForm): se o form for inválido apenas retorne; senão mostre a mensagem de sucesso e limpe com form.resetForm({...}).
}
