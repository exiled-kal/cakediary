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

    <div className="fixed flex flex-col z-50 bottom-[100px] top-0 right-0 h-auto left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl justify- rounded-md">
      <div class="flex p-5 flex-col justify-center items-center h-32 bg-indigo-600">
        <h3 class="text-lg text-white">How can we help?</h3>
        <p class="text-white opacity-90">We usually respond in a few hours</p>
      </div>
      <div className="bg-gray-50 flex-grow p-6">
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <input className="" type="hidden" name="contact_number" />
            <label className="m-2 rounded-xl">Name</label>
            <input className="rounded-lg" type="text" name="user_name" />
          </div>
          <div className="m-2">
            <label className="m-2 rounded-xl">Email</label>
            <input className="rounded-lg" type="email" name="user_email" />
          </div>
          <div className="mb-4">
            <label>Message</label>
            <textarea
              className="w-full h-28 px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              name="message"
            />
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
