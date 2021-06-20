const About = () => {
  return (
    <div className=" text-white">
      <div className="flex justify-center items-center">
        <img
          className="h-96 rounded-xl"
          src="https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s800-c85.jpg"
          alt=""
        />
      </div>
      <div className="about-info">
        <p className="text-lg ">Hello Everybody!!! </p>
        <h1 className="italic antialiased">
          Hello Everyone. My name is{' '}
          <span className="font-sans md:font-serif text-bla">Sonam Paldon</span> and I am
          also known as the Tibetan Baker currently residing in the beautiful
          Bay Area.
        </h1>
      </div>
    </div>
  );
};

export default About;
