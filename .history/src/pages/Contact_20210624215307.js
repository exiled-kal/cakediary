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

    <div className="fixed flex flex-col z-50 bottom-[100px] top-0 right-0 h-auto left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md">
      <div class="flex p-5 flex-col justify-center items-center h-32 bg-indigo-600">
        <h3 class="text-lg text-white">How can we help?</h3>
        <p class="text-white opacity-70">We usually respond in a few hours</p>
      </div>
      {/* <div>
        <form onSubmit={sendEmail}>
          <div className="">
            <input className="" type="hidden" name="contact_number" />
            <label className="">Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className="">
            <label>Email</label>
          </div>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
