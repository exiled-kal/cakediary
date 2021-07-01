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

    <div className="justify-center items-center rounded-md">
      <div class="flex p-5 flex-col justify-center items-center h-32 bg-indigo-600">
        <h3 class="text-lg text-white">How can we help ?</h3>
      </div>
      <div className="bg-gray-50 flex-grow p-6">
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            {/* <input className="" type="hidden" name="contact_number" /> */}
            <label className="m-2 rounded-lg text-white text-xl">Name</label>
            <input className="rounded-lg" type="text" name="user_name" />
          </div>
          <div className="m-2">
            <label className="m-2 rounded-lg text-white text-xl">Email</label>
            <input className="rounded-lg" type="email" name="user_email" />
          </div>
          <div className="mb-4">
            <label className="rounded-lg text-white">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full h-28 mt-2 px-3 py-2 placeholder-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              name="message"
            />
            <div className="mb-3">
              <input
                className="w-full px-3 py-4 text-white  rounded-md focus:outline-none hover:text-black  cursor-pointer"
                type="submit"
                value="Send"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
