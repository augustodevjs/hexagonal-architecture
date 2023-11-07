# Arquitetura Hexagonal (Ports and Adapters)

### Pontos importantes sobre arquitetura:

- Crescimento sustentável
- Software precisa se pagar ao passar do tempo
- Software deve ser desenhado por você e não pelo seu framework.
- Peças precisam se encaixar e eventualmente substituídas.

### Arquitetura vs Design:

- Atividades relacionadas a arquitetura de software são sempre de design. Entretanto, nem todas atividades de design são sobre arquitetura. O objetivo primário da arquitetura de software é garantir que os atributos de qualidade, restrições de alto nível e os objetivos do negócio, sejam atendidos pelo sistema. Qualquer decisão de design que não tenha relação com este objetivo não é arquitetural. Todas as decisões de design para um componente que não sejam “visíveis” fora dele, geralmente, também não são.”

### Ports and Adapters:

- Permite que uma aplicação seja igualmente controlada pelo usuário, programas, testes automatizados ou scripts em lote, e que seja desenvolvida e testada de forma isolada de seus dispositivos e bancos de dados de execução final.
- O termo “Arquitetura” Hexagonal está muito mais ligado com decisões de design de software do que necessariamente de arquitetura.

- Definição de limites e proteção nas regras da aplicação.
- Componentização e desacoplamento
  - Logs
  - Cache
  - Upload
  - Bancos de Dados
  - Comandos
  - Filas
  - HTTP / APIs / GraphQL
- Facilidade na quebra para microsserviços.

### Dependency Inversion Principle:

- Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
- Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

### Observações:

- Não há padrão estabelecido de como o código deve ser organizado.
