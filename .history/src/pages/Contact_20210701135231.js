import emailjs from 'emailjs-com';
import {useHistory} from 'react-router-dom';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    sendEmail().then(
      (result) => {
        alert('Email sent.');
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
  return (
    <div className="justify-center items-center rounded-md bg-gray-50">
      <div class="flex p-5 flex-col justify-center items-center h-20 bg-indigo-600">
        <h3 class="text-2xl text-white">How can we help ?</h3>
      </div>
      <div className="bg-gray-50 flex-grow p-2">
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="m-2 rounded-lg text-white text-xl">Name</label>
            <input className="rounded-lg" type="text" name="user_name" />
          </div>
          <div className="m-2">
            <label className="m-2 rounded-lg text-white text-xl">Email</label>
            <input className="rounded-lg" type="email" name="user_email" />
          </div>
          <div className="mb-4">
            <label className="rounded-lg text-white text-xl">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full h-28 mt-2 px-3 py-2 placeholder-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              name="message"
            />
            <div className="mb-3 w-60  rounded-md">
              <button
                onClick={() => useHistory.push('/sentEmail')}
                className="w-full px-3 py-4 text-white  rounded-md focus:outline-none hover:text-black  hover:bg-grey-50 cursor-pointer"
                type="submit"
                value="Send"
              >
                <span className="justify-center items-center">
                  {'Send Email'}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
