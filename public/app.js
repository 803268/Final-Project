$(document).ready(function(){
    //variables               
     var Username;
     var Password;
     var Email;
     var PhoneNumber;
     var Grades;
     var person = [] ;
     var Class = [];
     var Period = [];
     var Grade = [];
    //pre hiding and showing elements of page
     $("button#gradeSave").hide();
     $("p#gradeP").hide();
     $("form#login").hide();
     $("form#register").hide();
     $("button#loginEnter").hide();
     $("table#gradesTable").hide();

    
    
    $("button#login").click(function(){         
                  // opens the log elements on the page
        
                    $("form#login").show();
                   $("button#loginEnter").show();
                   $("form#register").hide();
                   $("table#gradesTable").hide();
                    $("input.grade").hide();
                    $("input.period").hide();
                    $("input.class").hide();
               });    
     
          $("button#register").click(function(){  
              //opens the register elements on the page
              $("button#gradeSave").show();
               $("form#login").show();
               $ ("form#register").show();
              $("button#loginEnter").hide();
              $("table#gradesTable").show();
               });
              
          $("button#registerEnter").click(function(e){
              //making a user is done here  
              $ ("form#register").hide();
              $("form#login").hide();
            e.preventDefault();
             if ( $("#username").val()== "" ||  $("#email").val() == "" ||  $("#password").val() == "" || $("#phoneNumber").val() == "") {
                 alert("Please Fill out the Fields");
                       
              } else {
                 
                 Username = $("#username").val();
                 Password = $("#password").val();
                 Email = $("#email").val();
                 PhoneNumber = $("#phoneNumber").val();
                 Class = [];
                 Period = [];
                 Grade = [];
                var Person = [];
                  $("input.class").each(function(index,oneClassBox) {
                      
                      Class.push(
                          $(this).val()
                      );
                  });
                  $("input.period").each(function(index,onePeriodBox) {
                      
                      Period.push(
                          $(this).val()
                      );
                  });
                  $("input.grade").each(function(index,oneGradeBox) {
                      
                      Grade.push(
                          $(this).val()
                      );
                      
                  });
                  let user = {Username, Password, Email, PhoneNumber,Grade, Class, Period}
                 
                 
                    
                 axios.post('/register',user)
         .then(function(response) {
               console.log(response.data);
              
           })
            .catch(function(error){
               console.log(error);
           }); // localStorage.setItem("Person",JSON.stringify(person))
             }
      }) ;   
     
     
     $("button#loginEnter").click(function(e){
         //logs the user into their account if they have one
         e.preventDefault();
   
           Username = $("#username").val();
           Password = $("#password").val();
         let Login = {Username, Password};
         
         
         axios.post('/login',Login)
         .then(function(response) {
              
             console.log("approved")
            $("button#gradeSave").show();
            $("p#gradeP").show();
            $("form#login").hide();
            $("form#register").hide(); 
            $("button#loginEnter").hide();
            $("table#gradesTable").show();
            $("button#register").hide();
            $("button#login").hide();
         
            console.log("approved")
         }).catch(function(error){
               console.log(error);
           });
         
         
     });
     
      $("button#gradeSave").click(function(e){
          //saves the users info into the server
          Username = $("#username").val();
                 Password = $("#password").val();
                 Email = $("#email").val();
                 PhoneNumber = $("#phoneNumber").val();
                 Class = [];
                 Period = [];
                 Grade = [];
                var Person = [];
                  $("input.class").each(function(index,oneClassBox) {
                      
                      Class.push(
                          $(this).val()
                      );
                  });
                  $("input.period").each(function(index,onePeriodBox) {
                      
                      Period.push(
                          $(this).val()
                      );
                  });
                  $("input.grade").each(function(index,oneGradeBox) {
                      
                      Grade.push(
                          $(this).val()
                      );
                      
                  });
                  let user = {Username, Password, Email, PhoneNumber,Grade, Class, Period}
               axios.post('/save', user)
 });
  });   
