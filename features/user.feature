Feature: Usuários

@POST
Scenario: Criar usuário
    Given que estou cadastrando novo usuário
    When enviar os dados do usuário
    Then apresentará sucesso no cadastro