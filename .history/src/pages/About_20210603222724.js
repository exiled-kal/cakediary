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
        className="bg-fixed"
        style="background-image: url(https://firebasestorage.googleapis.com/v0/b/cake-3ad68.appspot.com/o/PhotoRoom_20210427_173249.jpg?alt=media&token=2ab8f25b-280c-4093-aa2d-63dbba8d6bc8")"
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
