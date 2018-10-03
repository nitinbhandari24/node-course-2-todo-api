//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('We are unable to connect the Mongodb server');
  }
  console.log('Connected to Mongodb Server');

  // db.collection('Users').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos');
  // });

  // db.collection('Users').find({}).count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos');
  // });

  db.collection('Users').find({name: 'Nitin'}).count().then((count) => {
    console.log(`Todos count: ${count}`);
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('Unable to fetch Todos');
  });


//  db.close();
});
