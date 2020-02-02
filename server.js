const express = require('express');
const app = express();
const faker = require('faker');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/', (req, res) => {
  const lineups = [];
  for (let i of Array(7).keys()) {
    lineups.push({
      pitcher: `${faker.name.firstName()} ${faker.name.lastName()}`,
      catcher: `${faker.name.firstName()} ${faker.name.lastName()}`,
      first: `${faker.name.firstName()} ${faker.name.lastName()}`,
      second: `${faker.name.firstName()} ${faker.name.lastName()}`,
      shortstop: `${faker.name.firstName()} ${faker.name.lastName()}`,
      third: `${faker.name.firstName()} ${faker.name.lastName()}`,
      leftfield: `${faker.name.firstName()} ${faker.name.lastName()}`,
      leftcenter: `${faker.name.firstName()} ${faker.name.lastName()}`,
      rightcenter: `${faker.name.firstName()} ${faker.name.lastName()}`,
      rightfield: `${faker.name.firstName()} ${faker.name.lastName()}`
    });
  }

  res.send({data: lineups});
  res.end();
});

app.listen(8652, () => {
  console.log("listening on 8652");
});