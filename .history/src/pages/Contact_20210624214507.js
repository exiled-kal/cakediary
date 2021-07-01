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

    // <div className=" h-screen items-center justify-center mt-32 mb-32">
    //   <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
    //     <div className="flex justify-center items-center">
    //       <div className="flex">
    //         <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
    //           Tibetan Bakery
    //         </h1>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //
    //   </div>
    // </div>

    <div className="h-screen  justify-center items-center">
      <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <h2 className="text-3xl uppercase font-black">Tibetan Baker</h2>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Contact;
