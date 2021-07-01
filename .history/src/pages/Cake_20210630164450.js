import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    // <div className=" flex m-5 " style={{display: 'table -row'}}>
    //   <div style={{display: 'table-cell'}}>
    //     <div
    //       style={{
    //         display: 'flex',
    //         maxWidth: '1000px',
    //         marginLeft: 'auto',
    //         marginRight: 'auto',
    //         float: 'none',
    //       }}
    //     >
    //       <div className="overflow-x-hidden box-border flex">
    //         <motion.img
    //           src={image1}
    //           className=" m-4 transition duration-300 ease-in-out items-center bg-blue-300 rounded-lg underline transform hover:scale-110 motion-reduce:transform-none"
    //           style={{width: '520px', height: '500px'}}
    //           alt="cakepic"
    //         />
    //       </div>
    //       <div className="">
    //         <span className="text-white ">Name:</span>
    //         <h2> Chocolate Cake</h2>
    //         <span className="text-white">Description:</span>
    //         <h2 className="font-serins">
    //           It is made out of chocolate, wheat flour lorem ipsum
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    1
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

  );
};

export default Cake;
