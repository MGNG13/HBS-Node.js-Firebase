const { Router } = require('express');
const router = Router();

const { db } = require('../firebase');

router.all('/', async (req, res) => {
  res.render('index', {
    contacts: [ 
      {
        name: 'John Doe',
        email: 'john@doe.com',
        phone: '555-555-5555',
        city: 'London',
        state: 'New York',
      },
      {
        name: 'Matias Romero',
        email: 'matias@romero.com',
        phone: '555-555-5555',
        city: 'Mexico',
        state: 'CDMX',
      },
      {
        name: 'Richard Roe',
        email: 'richard@roe.com',
        phone: '555-555-5555',
        city: 'USA',
        state: 'Chicago',
      }
    ]
  });
});

module.exports = router;