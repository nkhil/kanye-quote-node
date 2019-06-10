const { When, Then, And } = require('cucumber');
const chai = require('chai');
const rp = require('request-promise');
const config = require('../config');

chai.should();

When('I visit the {string}', async function(route) {
  this.response = await rp({
    url: `${config.thisService.url}`,
    method: 'GET',
    resolveWithFullResponse: true,
  });
});

Then('I will get a {int} response', function(status) {
  this.response.statusCode.should.equal(status);
});

Then('The response body should be an Object', function() {
  const body = JSON.parse(this.response.body);
  body.should.be.an('object');
});

Then('The response body should have length of one', function() {
  const body = JSON.parse(this.response.body);
  const {length} = Object.keys(body);
  length.should.equal(1);
});
