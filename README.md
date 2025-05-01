# Cinel-React-Tarefa-Final

## 1. Contextualização

Nos projectos reais de Front-end, uma das primeiras funcionalidades solicitadas costuma ser um **gestor de tarefas** (task tracker). Ao desenvolveres esta **SPA em React**, vais percorrer o ciclo completo de criação de um recurso (Tarefa) – desde a definição do formulário até ao consumo de uma API REST local – praticando tudo o que aprendeste no mini-curso:
- Components & Props
- useState / useEffect
- Componentes controlados
- React Router DOM
- Axios
- Fluxo Git
Além disso, terás oportunidade de estender a aplicação com um bónus opcional – Sub-tarefas –, reforçando o conceito de composição de dados e componentes.

## 2. Objectivos de Aprendizagem

1. Estruturar uma aplicação React modular, usando componentes reutilizáveis.
2. Gerir e sincronizar estado local com uma API REST (json-server).
3. Navegar entre vistas sem recarregar a página (React Router DOM).
4. Consumir dados remotos de forma assíncrona com Axios, tratando erros.
5. Aplicar um fluxo Git limpo (commits pequenos, mensagens descritivas, README completo).

## 3. Ambiente de Trabalho
- Node ≥ 18 instalado.
- Conta GitHub activa.
- Editor de código (VS Code recomendado).

## 4. API de Suporte (json-server)
### 4.1 Instalação e arranque
```
npm install -g json-server        # ou adicionar a devDependency
npx json-server --watch db.json --port 3001
```

### 4.2 Estrutura inicial de db.json
```
{
  "tasks": [{
	  "id": 1,
	  "title": "Estudar React",
	  "description": "Revisão de hooks",
	  "priority": "alta",
	  "done": false
  }]
}
```
Para o bónus de sub-tarefas, cada tarefa deverá incluir um campo subtasks (array). Exemplo:
```
{
  "id": 1,
  "title": "Estudar React",
  "description": "Revisão de hooks",
  "priority": "alta",
  "subtasks": [
    { "id": 1, "title": "Rever useState", "done": false },
    { "id": 2, "title": "Praticar useEffect", "done": false }
  ]
}
```

## 5. Especificação Funcional
### 5.1 Tarefa Principal – Gestão de Tarefas
| Operação | Detalhe |
| --- | --- |
| Listar | Página inicial (/) apresenta todas as tarefas num quadro ou lista. |
| Criar | Formulário controlado para adicionar tarefa (título obrigatório; descrição e prioridade opcionais). |
| Actualizar | Edição da tarefa em página/modal dedicado, carregando dados existentes. |
| Eliminar | Botão de remoção com confirmação. |
| Estado Concluída | Checkbox ou botão para marcar tarefa como feita/não feita. |
| Persistência | Todas as operações comunicam com a API json-server (port 3001). |

### 5.2 Bónus – Sub-tarefas
Implementa, numa segunda fase (ou mesmo repo/branch separado se preferires), a gestão de subtasks dentro de cada tarefa:
| Operação | Detalhe |
| --- | --- |
| Criar Sub-tarefa | No detalhe da tarefa, formulário para adicionar sub-tarefas. |
| Marcar Conclusão | Possibilidade de marcar cada sub-tarefa como concluída. |
| Eliminar | Remoção individual de sub-tarefas. |
| Filtrar/Agrupar | (Opcional) Exibir tarefas com contagem de sub-tarefas concluídas. |

[!Importante]
Importante: O bonus deve não quebrar a funcionalidade principal. Podes entregar a versão core e, num segundo commit/pull-request, adicionar as sub-tarefas.

## 6. Plano de Trabalho (3 h)
| Bloco | Duração Actividade |
| --- | --- | --- |
| 1 | 30 min | Criar repositório no GitHub, inicializar React (npm create vite@latest ou create-react-app), instalar dependências (react-router-dom, axios, json-server). |
| 2 | 30 min | Definir rotas (/, /nova, /editar/:id) e componente de navegação. |
| 3 | 60 min | Implementar componentes de lista, detalhe e formulário; ligar Axios em useEffect; validar inputs. |
| 4 | 30 min | Estilização básica (CSS Modules, Tailwind, ou próprio). |
| 5 | 30 min | Testar fluxos CRUD completos, rever README, garantir commits limpos. |

[!Bónus]
Bónus: Reserva 1–2 h adicionais (fora das 3 h iniciais) para planear e integrar sub-tarefas, evitando pressa no conteúdo principal.

## 7. Entregáveis
| Item | Descrição |
| --- | --- |
| Repositório GitHub | Código completo + histórico Git organizado. |
| README.md | Descrição da aplicação- Passos para instalar e arrancar (React e json-server)- Variáveis de ambiente se necessário- Capturas de ecrã ou GIF demo. |
| Link de entrega | Submete o URL do repositório na plataforma da turma até <data a definir>. |

## 8. Critérios de Avaliação
| Peso | Critério | Descrição |
| --- | --- | --- |
| 70 % | Funcionalidade | CRUD completo a funcionar, sem erros na consola. |
| 10 % | Estrutura de Código | Componentes bem separados, nomes significativos, hooks usados correctamente. |
| 10 % | UX/UI | Interface clara, formulários usáveis, acessibilidade mínima (labels, foco). |
| 5 % | Git & Documentação | Commits lógicos, README detalhado, instruções que funcionem “à primeira”. |
| 5 % | Bónus | Implementação de sub-tarefas sem quebrar funcionalidades existentes. |

## 9. Boas Práticas
- Comentários e interface 100% em Português de Portugal (usar “obter”, “consola”, evitar gerúndio) ou 100% em Inglês.
- Nunca deixar dados de configuração sensíveis no repositório.
- Testar em tamanhos de ecrã diferentes; não assumir apenas desktop.
- Manter o código o mais simples possível — resolve primeiro o essencial, refina depois.