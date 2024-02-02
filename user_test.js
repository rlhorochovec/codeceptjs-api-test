Feature('user');

Scenario('test something',  async ({ I }) => {
    const response = await I.sendPostRequest('/users', {
        name: 'hulk',
        job: 'hero'
      });
    I.seeResponseCodeIsSuccessful();
});
