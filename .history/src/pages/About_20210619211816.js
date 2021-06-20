const About = () => {
  return (
    <div className=" text-white flex m-10">
      <div className="m-5">
        <img
          className="h-80 w-2/6 sm:w-auto rounded-xl"
          src="https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s800-c85.jpg"
          alt=""
        />
      </div>
      <div className="mr-10">
        <h2 className="text-lg ">Hello Everybody!!! </h2>
        <p className="italic antialiased">
          Hello Everyone. My name is{' '}
          <span className="font-sans md:font-serif text-black text-lg animate-bounce">
            Sonam Paldon
          </span>{' '}
          and I am also known as the Tibetan Baker currently residing in the
          beautiful Bay Area. I grew up in India and moved to States in 2016. I
          have been professionally baking for few years.
        </p>
        <p>
          The best part about baking for me is decoration. I started doing
          custom cakes order only recently after we got hit with pandemic and
          gae me good time on hand to venture a new path.I enjoy baking and love
          decorating beautiful cakes. It is amazing to see how my cakes can
          bring excitement and joys in people's life and to be part of their
          beautiful celebration. I make everything from scratch with high
          quality ingredients and with lot of attention to details as you would
          have seen in photo gallery.{' '}
        </p>
      </div>
    </div>
  );
};

export default About;
