/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:3000/api'
    },
    JSONResponse: {}
  },
  include: {
    Eu: './steps_file.js'
  },
  name: 'codeceptjs-api-test',
  translation: 'pt-BR'
}