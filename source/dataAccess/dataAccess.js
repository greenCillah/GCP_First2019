
module.exports = {

    bar: function () {
        return(true);
      },
    foo: function () {
        return(false);
      },
    getRecords: function (db){
      let dataTxt = 'start';  
      
      let citiesRef = db.collection('users');

      console.log(1111);
      /*  
      let query = citiesRef.where('last', '==', true).get()
          .then(snapshot => {
        
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }  

          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());

            dataTxt = dataTxt + "___" + doc.data();
          });
        })
        .catch(err => {
          console.log('Error getting documents', err);
         });
        */ 
        return(dataTxt);

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

