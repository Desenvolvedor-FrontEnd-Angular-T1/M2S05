// cadastro-livro.ts - formulário REATIVO (da aula 1) + navegação por código e guard (aula 2).
import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivroService } from '../services/livro-service';

const semSoEspacos: ValidatorFn = (controle: AbstractControl): ValidationErrors | null => {
  const valor = controle.value;
  return typeof valor === 'string' && valor.length > 0 && valor.trim() === '' ? { soEspacos: true } : null;
};

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
  private router = inject(Router);   // permite navegar por código

  protected readonly categorias = ['Programação', 'Design', 'Banco de Dados'];
  protected salvo = signal('');

  protected readonly form = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    autor: ['', [Validators.required, semSoEspacos]],
    categoria: ['Programação', Validators.required],
    paginas: [100, [Validators.required, Validators.min(1), Validators.max(2000)]],
    preco: [0, [Validators.required, Validators.min(0)]],
    imagem: ['', Validators.pattern(/^https?:\/\/\S+$/)],
  });

  // Chamado pelo guard sairSemSalvarGuard: true = o usuário digitou algo e ainda não salvou.
  temAlteracoes(): boolean {
    return this.form.dirty;
  }

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
      this.form.markAllAsTouched();
      return;
    }
    const novo = this.livroService.adicionar(this.form.getRawValue());
    this.salvo.set(`"${novo.titulo}" cadastrado! (id ${novo.id})`);
    this.form.reset();   // reset ANTES de navegar: o formulário deixa de estar "alterado" e o guard libera a saída
    this.router.navigate(['/livros', novo.id]);   // vai para o detalhe do livro recém-cadastrado
  }
}
