
module.exports = {

    bar: function () {
        return(true);
      },
    foo: function () {
        return(false);
      },
    getRecords: function (db){
      let dataTxt = 'starting';  
      
      let citiesRef = db.collection('users');

      let query = citiesRef.get()
          .then(snapshot => {
        
          if (snapshot.empty) {
            console.log('No matching documents.');
                                
                return('No matching documents.');
          }  

          var i = 1;

          snapshot.forEach(doc => {
            
            dataTxt = dataTxt + "___Count =: " + i.toString() + "__" + JSON.stringify(doc);
          
            i++;

          });

          return(dataTxt);
          console.log(i,dataTxt);
        })
        .catch(err => {
          console.log('Error getting documents', err);
          return(err);
         });
         
        

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

