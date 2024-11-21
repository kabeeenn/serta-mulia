const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  const db = new Firestore({
    keyFilename: process.env.FIREBASE_KEY_PATH, // Mengambil path dari env
    projectId: 'totemic-bonus-441002-g5' 
  });

  const predictCollection = db.collection('prediction');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
