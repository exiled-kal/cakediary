// import gsap from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger';

// //Text Intro
// export const textIntro = (elem) => {
//   gsap.from(elem, {
//     xPercent: -20,
//     opacity: 0,
//     stagger: 0.2,
//     duration: 2,
//     scale: -1,
//     ease: 'back',
//   });
// };


// //Stagger links


// // Hover on the link
// export const hoverLink = (e) => {
//   gsap.to(e.target, {
//     duration: 0.4,
//     y: 3,
//     skewX: 4,
//     ease: 'power2.inOut',
//   });
// };

// // Hover away from the link
// export const hoverExit = (e) => {
//   gsap.to(e.target, {
//     duration: 0.4,
//     y: -3,
//     skewX: 0,
//     ease: 'power2.inOut',
//   });
// };
// //Skew gallery Images
// export const skewGallery = (elem1) => {
//   //register ScrollTrigger
//   gsap.registerPlugin(ScrollTrigger);
//   // make the right edge "stick" to the scroll bar. force3D: true improves performance
//   gsap.set(elem1, {transformOrigin: 'right center', force3D: true});
//   let clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.
//   ScrollTrigger.create({
//     trigger: elem1,
//     onUpdate: (self) => {
//       const velocity = clamp(Math.round(self.getVelocity() / 300));
//       gsap.to(elem1, {
//         skew: 0,
//         skewY: velocity,
//         ease: 'power3',
//         duration: 0.8,
//         overwrite: true,
//       });
//     },
//   });
// };
