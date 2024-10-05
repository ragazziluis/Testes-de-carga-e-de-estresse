import http from 'k6/http';  // Importa o módulo HTTP do k6 para realizar requisições HTTP
import { sleep } from 'k6';  // Importa a função sleep para simular comportamento de usuário

// Configuração do teste de estresse, simulando uma carga de trabalho intensa com muitos usuários simultâneos
export const options = {
  stages: [
    { duration: '10s', target: 200 },  // Primeira etapa: aumento gradual de 0 até 200 usuários em 10 segundos
    { duration: '30s', target: 200 },  // Segunda etapa: 200 usuários ativos por 30 segundos
    { duration: '10s', target: 0 },    // Terceira etapa: redução gradual de 200 usuários para 0 em 10 segundos
  ],
};

// Função principal que será executada por cada usuário virtual (VU) durante o teste
export default function () {
  // Envia uma requisição HTTP GET para o servidor rodando na URL especificada
  http.get('http://localhost:3000');
  
  // Pausa a execução por 1 segundo para simular comportamento de usuário real
  sleep(1);
}