import image1 from '../images/cake1.jpg';

const Collections = ({title, description, price}) => {
  return (
    <div className="1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20
    21
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">
            Sarah Dayan
          </div>
          <div class="text-gray-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
    ">
      <img className="w-100 max-h-screen flex flex-col" src={image1} alt="" />
      <h2>{title}</h2>
      <h4>{description}</h4>
      <h3>{price}</h3>
      <h4>There are made by me</h4>
    </div>
  );
};

export default Collections;
