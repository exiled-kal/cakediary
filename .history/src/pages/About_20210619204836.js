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
        <h2 className="text-lg ">Hello Everybody!!! </h2>
        <p className="italic antialiased">
          Hello Everyone. My name is{' '}
          <span className="font-sans md:font-serif text-black text-lg">
            Sonam Paldon
          </span>{' '}
          and I am also known as the Tibetan Baker currently residing in the
          beautiful Bay Area. I grew up in India and moved to States in 2016. I
          have been professionally baking for few years.
        </p>
        <p>The best part of the baking for me is decorati</p>
      </div>
    </div>
  );
};

export default About;
