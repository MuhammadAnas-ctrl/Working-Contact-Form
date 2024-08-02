




function sendEmail(){
    const name = document.getElementById("name")
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const text = document.getElementById("text");



    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "flashycoderch@gmail.com",
      Password: "9816C951EA9E577380C9CBD84F68FC088D99",
      To: "flashycoderch@gmail.com",
      From: "flashycoderch@gmail.com",
      Subject: `${name.value} has contacted`,
      Body: `Name : ${name.value} <br> Email : ${email.value} <br> Phone-No : ${phone.value}
            <br> Message : ${text.value}`
    }).then((message) =>{
        if(message === "OK"){
            alert("We Will Contact You As Soon As Possible")
        }
        else{
            alert("Failed To Send Email")
        }
    });

}