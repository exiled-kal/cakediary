import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gv9j7yh',
        'template_upggisf',
        e.target,
        'user_lQUMeZRjJ7CnKwRu5P1Mf'
      )
      .then(
        (result) => {
          alert('Message sent.');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    // <div className="h-screen flex justify-center items-center">
    //   <h1 className="text-9xl uppercase font-black">Contact page</h1>
    // </div>

    <form
      className="w-full max-w-lg justify-center items-center"
      onSubmit={sendEmail}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <input type="hidden" name="contact_number" />
          <label>Name</label>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <input type="text" name="user_name" />
          <label>Email</label>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className=""><input type="submit" value="Send" /></div>
      </div>
    </form>
  );
};

export default Contact;
