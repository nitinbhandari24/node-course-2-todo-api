//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('We are unable to connect the Mongodb server');
  }
  console.log('Connected to Mongodb Server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5bb4ce932e5306ffbf202548')
  }, {
    $set: {
      completed: true
    }
  },{
      returnoriginal: false
  }).then((result) => {
    console.log(result);
  });

//  db.close();
});
