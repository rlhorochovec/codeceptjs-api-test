const { I } = inject();

Given('que possuo acesso a API de usuários', () => {});

When('eu enviar uma solicitação para criar um novo usuário', () => {
  body = {
    name: 'hulk',
    job: 'hero'
  }
  I.sendPostRequest('/users', body)
});

Then('o novo usuário deve ser criado com sucesso', () => {
  I.seeResponseCodeIsSuccessful()
  I.seeResponseContainsJson(
    {
      name: 'hulk',
      job: 'hero',
    }
  );
});

Then('eu devo receber um código de status HTTP {int}', (num) => {
  I.seeResponseCodeIs(num)
});

When('eu solicitar os detalhes do usuário com ID {int}', (num) => {
  I.sendGetRequest('/users/' + num)
});

Then('devo receber os detalhes do usuário corretos', () => {
  I.seeResponseCodeIsSuccessful()
  I.seeResponseContainsJson(
    {
      "data": {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
      }
    }
  );
});

When('eu enviar uma solicitação para remover o usuário com ID {int}', (num) => {
  I.sendDeleteRequest('/users/' + num)
});

Then('o usuário deve ser removido com sucesso', () => {
  I.seeResponseCodeIsSuccessful()
});

When('eu enviar uma solicitação para atualizar os detalhes do usuário com ID {int}', (num) => {
  body = {
    name: 'cleiton',
    job: 'programador'
  }
  I.sendPutRequest('/users/' + num)
});

Then('os detalhes do usuário devem ser atualizados com sucesso', () => {
  I.seeResponseCodeIsSuccessful()
});