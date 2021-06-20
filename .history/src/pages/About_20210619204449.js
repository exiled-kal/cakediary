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
          <h4 className="font-sans md:font-serif text-black text-lg">
            Sonam Paldon
          </h4>{' '}
          and I am also known as the Tibetan Baker currently residing in the
          beautiful Bay Area. I grew up in India and moved to States in 2016. I have been professionall baking for few years 
        </h1>
      </div>
    </div>
  );
};

export default About;