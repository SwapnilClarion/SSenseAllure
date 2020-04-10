const faker = require('faker');
const chance=require('chance');
const ch=new chance();
module.exports = {
  // Guest user data
  GUEST_EMAIL: faker.internet.email(),
  GUEST_FIRSTNAME: faker.name.firstName(),
  GUEST_LASTNAME: faker.name.lastName(),
  GUEST_STREETADDR: faker.address.streetAddress(),
  GUEST_COMPANY_NAME: faker.company.companyName(),
  GUEST_CITY: faker.address.city(),
  GUEST_ZIPCODE: faker.address.zipCode(),
  GUEST_COUNTRY: faker.address.country(),
  // GUEST_STATE:faker.address.state(),
  GUEST_PHONENO: faker.phone.phoneNumber(),
  // ALIPAY
  ALIPAY_USERNAME: faker.internet.userName(),
  ALIPAY_PASSWORD: faker.random.word(),

  // SignUp
  USER_PASSWORD: '123456',
  // User credentials required during Checkout
  GUEST_GMAIL_Email:
    'autowebdriverio+guest' + ch.integer({min:0,max:1000}) +ch.letter({ casing: 'lower' })+ '@gmail.com',
  MEMBER_GMAIL_Email:
    'autowebdriverio+member' +ch.integer({min:0,max:1000})+ch.letter({ casing: 'lower' })+ '@gmail.com',
  MEMBER_GMAIL_Password: '123123',
};
