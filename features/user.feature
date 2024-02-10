Feature: API de Usuários

Background:
    Given que possuo acesso a API de usuários

@POST
Scenario: Criar um novo usuário
    When eu enviar uma solicitação para criar um novo usuário
    Then o novo usuário deve ser criado com sucesso
    And eu devo receber um código de status HTTP 201

@PUT
Scenario: Atualizar informações de um usuário 
    When eu enviar uma solicitação para atualizar os detalhes do usuário com ID 4
    Then os detalhes do usuário devem ser atualizados com sucesso
    And eu devo receber um código de status HTTP 200

@GET
Scenario: Obter detalhes de um usuário existente
    When eu solicitar os detalhes do usuário com ID 6
    Then devo receber os detalhes do usuário corretos
    And eu devo receber um código de status HTTP 200

@DEL
Scenario: Remover um usuário existente
    When eu enviar uma solicitação para remover o usuário com ID 5
    Then o usuário deve ser removido com sucesso
    And eu devo receber um código de status HTTP 204