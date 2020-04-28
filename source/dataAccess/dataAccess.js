module.exports = {

    bar: function () {
        return(true);
      },
    foo: function () {
        return(false);
      },
      getRecords: function (){
        return("123456");
      }
    };


 /*   
let citiesRef = db.collection('cities');
let query = citiesRef.where('capital', '==', true).get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  }); */

