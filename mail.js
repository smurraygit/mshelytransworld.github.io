// Send the contact to email
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
   
  
   const serviceID = "service_ldjy9b9";
   const templateID = "template_eeudkzb";
  
   emailjs.send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        
        window.location.href = "thankyou.html"
        
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        alert("An error occurred while sending your message. Please try again.");
      });
  }
  
  // show new flat inputs
