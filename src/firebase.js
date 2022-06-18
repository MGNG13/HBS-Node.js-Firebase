// initialize all firebase process and export all services
const { initializeApp, applicationDefault } = require('firebase-admin/app');

// 'applicationDefault()' returns firebase.json from '.env' config
initializeApp({
  credential: applicationDefault()
});

const { getFirestore } = require('firebase-admin/firestore');

const db = getFirestore();

module.exports = {
  db,
}