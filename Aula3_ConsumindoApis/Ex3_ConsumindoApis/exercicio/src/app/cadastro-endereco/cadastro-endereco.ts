// cadastro-endereco.ts - formulário reativo + API: ao digitar 8 números, consulta o viaCEP e preenche o endereço.
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter, finalize } from 'rxjs';
// TODO 3: Importe a diretiva SomenteNumeros ('../directives/somente-numeros') e o CepService ('../services/cep-service').

@Component({
  selector: 'app-cadastro-endereco',
  // TODO 3: Declare imports: [ReactiveFormsModule, SomenteNumeros].
  imports: [],
  templateUrl: './cadastro-endereco.html',
  styleUrl: './cadastro-endereco.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroEndereco {
  // TODO 3: Crie: fb e cepService (inject); signals carregando, erroCep e salvo; o form (cep com required + pattern /^\d{8}$/, logradouro, numero, bairro, cidade e uf, todos required); no constructor, escute form.controls.cep.valueChanges (filter length 8, takeUntilDestroyed) e chame buscarCep(); e os métodos buscarCep(), invalido(campo) e enviar().
}
