$(document).ready(function(){
    //Get text from input box               
     var Username;
     var Password;
     var Email;
     var PhoneNumber;
     var Grades;
              var person = [] ;       
     $("button#gradeSave").hide();
     $("p#gradeP").hide();
     $("form#login").hide();
     $("form#register").hide();
     $("button#loginEnter").hide();
     $("table#gradesTable").hide();
     
               $("button#login").click(function(){         
                   $("form#login").show();
                   $("button#loginEnter").show();
                   $("form#register").hide();
                   $("table#gradesTable").hide();
               });    
     
          $("button#register").click(function(){  
              
              
               $("form#login").show();
               $ ("form#register").show();
              $("button#loginEnter").hide();
              $("table#gradesTable").show();
              
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
                  Person [];
                  $("input.class").each(function(index,oneClassBox) {
                      
                      Class.push(
                          oneClassBox.val()
                      );
                  });
                  $("input.period").each(function(index,onePeriodBox) {
                      
                      Period.push(
                          oneClassBox.val()
                      );
                  });
                  $("input.grade").each(function(index,oneGradeBox) {
                      
                      Grade.push(
                          oneGradeBox.val()
                      );
                  });
                 person =  JSON.parse(localStorage.getItem("Person"))
                  
                  person.push({
                     Username: Username,
                     Password: Password,
                     Email: Email,
                     PhoneNumber: PhoneNumber,
                     Grades: Grades
                  });
                 
                 localStorage.setItem("Person",JSON.stringify(person))
             }
      }) ;   
     
     
     $("button#loginEnter").click(function(e){
         e.preventDefault();
        person =  JSON.parse(localStorage.getItem("Person"))
       Grades = (localStorage.getItem("Grades"))
      for  ( i = 0 ; i< person.length ; i++) {
         console.log(person[i]);
          console.log(Password);
           Username = $("#username").val();
                   Password = $("#password").val();
          if (Password == person[i].Password && Username == person[i].Username) {
              
             console.log("approved")
            $("button#gradeSave").show();
            $("p#gradeP").show();
            $("form#login").hide();
            $("form#register").hide(); 
            $("button#loginEnter").hide();
            $("table#gradesTable").show();
            $("button#register").hide();
            $("button#login").hide();
         }
          
          else {
               alert("ID not found");
          }
          
      }
       
         
         
     });
     
      $("button#gradeSave").click(function(){
            Grades = $("table#gradesTable").val();
          localStorage.setItem("Grades",Grades);
 });
     
     
     
       function loadSettings() {
           // $("button#username").val(localStorage.getItem("Username"));
            //$("button#password").val(localStorage.getItem("Password"));
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