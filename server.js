const express = require('express');
const app = express();
var data = express();

app.use(express.static('public'));
app.use(express.json()); 
                                 

 var users = [];
   
    app.get('/',function(req,res){
   res.render('index', {
    title: 'Users',
       users: users
});
});

    
    app.post('/register', function(req,res){
     
            console.log('SUCCESS');
        
   users.push(req.body);
        
   console.log(users);
        
});


app.post('/login', function(req,res){
                    
     for  ( i = 0 ; i< users.length ; i++) {
          
         console.log(users[i]);
         console.log(users[i].Password);
          
           Username = req.body.Username;
           Password = req.body.Password;
          
         
         
          if (Password == users[i].Password && Username == users[i].Username) {
             
             let login = {Username,Password};
             res.send(login);
              
              console.log("approved")
             
         }
          
          else {
               alert("ID not found");
          }
          
          let login = {Username,Password};
         
          axios.post('/login',user)
         .then(function(response) {
               console.log(response.data);
              
           })
            .catch(function(error){
               console.log(error);
           });
          
      }

     
});                           
                                 
                                 
                                                                 
app.listen(3000, () => { console.log('Server Started...');
});