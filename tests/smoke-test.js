import http from 'k6/http';
import { sleep } from 'k6';

// Configuração do teste de carga com 1 usuário virtual (VU) durante 5 segundos
export const options = {
  vus: 1,  // Um usuário virtual
  duration: '5s',  // Teste durará 5 segundos
};

// Função principal que será executada para cada VU
// Aqui simulamos um usuário fazendo uma requisição GET à API em execução local
export default function () {
  // Faz uma requisição GET para a URL da API
  http.get('http://localhost:3000');
  
  // Pausa de 1 segundo para simular o comportamento real de um usuário
  sleep(1);
}
