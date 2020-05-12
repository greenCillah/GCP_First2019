
module.exports = {

    bar: function () {
        return(true);
      },
    foo: function () {
        return(false);
      },
    getRecords: function (db){
      let dataTxt = 'starting';  
      
      let users = db.collection('users');
      console.log("A");
      let query = users.get()
          .then(snapshot => {
            console.log("B");
          if (snapshot.empty) {
             console.log('No matching documents.');
             return('No matching documents.');
          }  
          console.log("C");  
          var i = 1;

          snapshot.forEach(doc => {
            console.log("D");
            dataTxt = dataTxt + "___Count =: " + i.toString() + "__" + JSON.stringify(doc);
          
            i++;

          });

          console.log("E");
          return(dataTxt);
          
        })
        .catch(err => {
          console.log('Error getting documents', err);
          return(err);
         });
        
        console.log("F");
        return("freddy should nt be here");

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

