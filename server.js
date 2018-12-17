const express = require('express');
const app = express();


app.use(express.static('public'));
app.use(express.json()); 
                                 

 var users = [];
   
   

    
    app.post('/register', function(req,res){
     // .post function for registering
            console.log('SUCCESS');
        
   users.push(req.body);
        
   console.log(users);
        
});


app.post('/login', function(req,res){
         // .post function for logging into account           
     for  ( i = 0 ; i< users.length ; i++) {
          
         console.log(users[i]);
         console.log(users[i].Password);
          
           Username = req.body.Username;
           Password = req.body.Password;
          
         
         
          if (Password == users[i].Password && Username == users[i].Username) {
             
             let login = users[i];
             res.send(login);
              
              console.log("approved")
             
         }
          
          else {
               alert("ID not found");
          }
          
          
      }

     
});                           
    app.post('/save', function(req,res) {
             for  ( i = 0 ; i< users.length ; i++) {
          
        console.log(users[i]);
       
       
        Grade = req.body.Grade;
           Period = req.body.Period;
            Class = req.body.Class;
           
         
         
          if (Password == users[i].Password && Username == users[i].Username) {
             users[i].Grade = Grade;
             users[i].Period = Period;
             user[i].Class = Class; 
             let save = {Grade,Period,Class};
             res.send(save);
              
              console.log("approved")
             
         }
          
          else {
               alert("Content not found");
          }
          
          
          
      }
             
             });                            
                                 
                                                                 
app.listen(3000, () => { console.log('Server Started...');
});