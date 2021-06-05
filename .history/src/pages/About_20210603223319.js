

const About = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <img
          className="h-96 rounded-xl"
          src="https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s800-c85.jpg"
          alt=""
        />
      </div>
      <div
        className="about-info"
        style={{background-image:linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9)), url({image4})}}
      >
        <p>
          <p className="text-lg">Hello Everybody!!! </p>
          <h1 className="italic">
            My name is Sonam Paldon and I am also known as the Tibetan Baker
            currently residing in the beautiful Bay Area.
          </h1>
        </p>
      </div>
    </div>
  );
};

export default About;
