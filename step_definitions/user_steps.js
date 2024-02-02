const { I } = inject();

Given('que estou cadastrando novo usuário', () => {
  body = {
    name: 'hulk',
    job: 'hero'
  }
});

When('enviar os dados do usuário', () => {
  I.sendPostRequest('/users', body);
});

Then('apresentará sucesso no cadastro', () => {
  I.seeResponseCodeIsSuccessful();
  I.seeResponseCodeIs(201);
  I.seeResponseContainsJson(
    {
      name: 'hulk',
      job: 'hero',
    }
  );
});
