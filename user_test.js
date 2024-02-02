Feature('Usuer');

Scenario('Create user',  async ({ I }) => {
    const response = await I.sendPostRequest('/users', {
        name: 'hulk',
        job: 'hero'
      });
    I.seeResponseCodeIsSuccessful();
});
