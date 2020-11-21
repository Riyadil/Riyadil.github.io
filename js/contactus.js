const f_name=document.getElementById("fullname");
const e_mail=document.getElementById("email");
const Subject=document.getElementById("subject");
const msg=document.getElementById("message");
const send_msg=document.getElementById("button");


const database=firebase.database();

button.addEventListener('click', (e) => {
    e.preventDefault(); 
    database.ref('/users/'+ f_name.value).set({
        email: e_mail.value,
        subject: Subject.value,
         message: msg.value

    }

    );
    document.getElementById('contactForm').reset();
    setTimeout(function(){
        document.location.href="index.html";
      },3050);
    
     
}
);
