// endereco.ts - formato da resposta da API viaCEP (https://viacep.com.br/ws/88010000/json/).
// Os nomes são os MESMOS que a API devolve (ex.: "localidade" = cidade).
export interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean | string; // a viaCEP manda "erro" quando o CEP não existe
}
