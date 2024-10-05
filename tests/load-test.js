import http from 'k6/http';  // Importa o módulo HTTP do k6 para realizar requisições HTTP
import { sleep } from 'k6';  // Importa a função sleep para pausar entre as ações e simular comportamento de usuário

// Configuração do teste de carga usando o conceito de "stages" (etapas)
export const options = {
  stages: [
    { duration: '10s', target: 100 },  // Primeira etapa: aumento gradual de 0 até 100 usuários em 10 segundos
    { duration: '30s', target: 100 },  // Segunda etapa: 100 usuários ativos por 30 segundos
    { duration: '10s', target: 0 },    // Terceira etapa: redução gradual dos 100 usuários para 0 em 10 segundos
  ],
};

// Função principal que será executada por cada usuário virtual (VU) durante o teste
export default function () {
  // Envia uma requisição HTTP GET para o servidor rodando na URL especificada
  http.get('http://localhost:3000');
  
  // A função sleep pausa a execução por 1 segundo, simulando o tempo de inatividade entre as ações de um usuário real
  sleep(1);
}