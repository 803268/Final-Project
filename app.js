$(document).ready(function(){
    //Get text from input box               
     var Username;
     var Password;
     var Email;
     var PhoneNumber;
     var Grades;
     var person = [] ;
     var Class = [];
     var Period = [];
     var Grade = [];
    
     $("button#gradeSave").hide();
     $("p#gradeP").hide();
     $("form#login").hide();
     $("form#register").hide();
     $("button#loginEnter").hide();
     $("table#gradesTable").hide();
     $("input.grade").hide();
     $("input.period").hide();
     $("input.class").hide();
    
    
    $("button#login").click(function(){         
                   $("form#login").show();
                   $("button#loginEnter").show();
                   $("form#register").hide();
                   $("table#gradesTable").hide();
                    $("input.grade").hide();
                    $("input.period").hide();
                    $("input.class").hide();
               });    
     
          $("button#register").click(function(){  
              
              
               $("form#login").show();
               $ ("form#register").show();
              $("button#loginEnter").hide();
              
               });
              
          $("button#registerEnter").click(function(e){
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
                 
                  
                  person = {
                     Username: Username,
                     Password: Password,
                     Email: Email,
                     PhoneNumber: PhoneNumber,
                     Grade: Grade,
                    Class: Class,
                      Period: Period
                  };
                 
                    
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
         });
       
       .catch(function(error){
               console.log(error);
           });
         
         
     });
     
      $("button#gradeSave").click(function(e){
            Grade = $("input.grade").val();
            Period = $("input.period").val();
            Class = $("input.class").val();
          
 });
     
     
     
      /* function loadSettings() {
           $("table#gradesTable").val(localStorage.getItem("Grades"));
            $("Person").val();
        }

        function saveSettings() {
            var Username = document.getElementById(Username).value;
            var Password = document.getElementById(Password).value;
           var Grades = document.getElementById(Grades).value;

            localStorage.setItem("Username",Username)
            localStorage.setItem("Password",Password)
            localStorage.setItem("Grades",Grades)
          
        }
         
 });
                   
                   //i need to make a specific diary connect to the specific person