const express = require('express');
const app = express();
const port = 3000;
const faker = require('faker');

app.get('/', (req, res) => {
    
    const firstName = faker.name.firstName()
    const findName = faker.name.findName()
    const date = `${faker.date.past(50, 2000).getDay()}/${faker.date.past(50, 2000).getMonth()}/${faker.date.past(50, 2000).getFullYear()}`
    const gender = faker.name.gender(firstName);
    const email = faker.internet.email(firstName, findName)
    const password = faker.internet.password();

    return res.send(
    user = {
        firstName,
        findName,
        date,
        email,
        gender,
        password,
    }) 
  });


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`)
  });