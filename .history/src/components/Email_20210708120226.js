import emailjs from "emailjs-com";


  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gv9j7yh",
        "template_upggisf",
        e.target,
        "user_lQUMeZRjJ7CnKwRu5P1Mf"
      )
      .then(
        (result) => {
          alert("Email sent.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }


export default Email;
