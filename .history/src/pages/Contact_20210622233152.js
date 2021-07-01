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

    <div className="flex h-screen items-center justify-center mt-32 mb-32">
      <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-gray-600 font-bold md:terxt-2xl text-xl">
              Tibetan Baker
            </h1>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={sendEmail}>
          <div className="grid grid-cols-1 mt-5 mx-7">
            <input className type="hidden" name="contact_number" />
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Name
            </label>
            <input type="text" name="user_name" />
          </div>
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;