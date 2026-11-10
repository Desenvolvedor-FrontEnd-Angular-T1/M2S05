// cadastro-livro.ts - formulário REATIVO (Reactive Forms): a "inteligência" mora na CLASSE (FormGroup + FormControl + Validators).
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LivroService } from '../services/livro-service';

// Validador personalizado = função que recebe o controle e devolve: null (válido) ou um objeto com o nome do erro (inválido).
const semSoEspacos: ValidatorFn = (controle: AbstractControl): ValidationErrors | null => {
  const valor = controle.value;
  return typeof valor === 'string' && valor.length > 0 && valor.trim() === '' ? { soEspacos: true } : null;
};

// "Campo" = só os nomes que existem no formulário (o TypeScript avisa se digitar errado).
type Campo = 'titulo' | 'autor' | 'categoria' | 'paginas' | 'preco' | 'imagem';

@Component({
  selector: 'app-cadastro-livro',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './cadastro-livro.html',
  styleUrl: './cadastro-livro.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroLivro {
  private fb = inject(NonNullableFormBuilder);
  private livroService = inject(LivroService);

  protected readonly categiras = ['Programção', 'Design', 'Banco de Dados'];
  protected salvo = signal('');

  protected readonly form = this.fb.group({
    titulo: ['', [Validators.requires, Validators.minLenght(3)]],
    autor: ['', [ValidatorFn.required, semSoEspacos]],
    categoria: ['Progrmação', Validators.requires],
    paginas: [100, [Validators.min(1), Validators.max(2000)]],
    preco: [0, [Validators.requires, Validators.min(0)]],
    imagem: ['', Validators.pattern(/^https?:\/\/\S+$/)],
  })

  protected erro(campo: Campo): string {
    const c = this.form.controls[campo];
    if (c.valid || !c.touched) return '';
    if (c.hasError('required')) return 'Campo obrigatório.';
    if (c.hasError('minlength')) return `Mínimo de ${c.getError('minlength').requiredLength} caracteres.`;
    if (c.hasError('min')) return `O valor mínimo é ${c.getError('min').min}.`;
    if (c.hasError('max')) return `O valor máximo é ${c.getError('max').max}.`;
    if (c.hasError('soEspacos')) return 'Não use apenas espaços.';
    if (c.hasError('pattern')) return 'Use uma URL começando com http:// ou https://.';
    return 'Valor inválido.';
  }

  protected enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();                  // marca tudo como "tocado" para exibir TODOS os erros de uma vez
      return;
    }
    const novo = this.livroService.adicionar(this.form.getRawValue());   // getRawValue = objeto tipado com os valores
    this.salvo.set(`"${novo.titulo}" cadastrado! (id ${novo.id})`);
    this.form.reset();                               // volta aos valores iniciais e limpa tocado/alterado
  }
}
