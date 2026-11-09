// cadastro-livro.ts - formulário REATIVO (Reactive Forms): a "inteligência" mora na CLASSE (FormGroup + FormControl + Validators).
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
// TODO 5: Importe do '@angular/forms': ReactiveFormsModule, NonNullableFormBuilder, Validators, ValidatorFn, AbstractControl e ValidationErrors; importe JsonPipe de '@angular/common' e o LivroService.

// TODO 5: Crie o validador personalizado semSoEspacos (ValidatorFn): devolve { soEspacos: true } se o texto tiver só espaços; senão null.

@Component({
  selector: 'app-cadastro-livro',
  // TODO 5: Adicione imports: [ReactiveFormsModule, JsonPipe].
  templateUrl: './cadastro-livro.html',
  styleUrl: './cadastro-livro.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroLivro {
  // TODO 5: Injete NonNullableFormBuilder e LivroService; crie categorias, o signal salvo, o form (FormGroup com 6 controles e seus Validators), o método erro(campo) e o método enviar().
}
